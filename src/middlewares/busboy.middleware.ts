import { tmpdir as Tmpdir } from 'os';
import { readFile, createWriteStream, unlinkSync } from 'fs';
import { join } from 'path';
import Busboy from 'busboy';

export function BusboyMiddleware(req, res, next) {
  // req.file is the `image` file
  // req.body will hold the text fields, if there were any req.headers['content-type'].includes('multipart/form-data')
  const busboy = Busboy({
    headers: req.headers,
    limits: {
      // Cloud functions impose this restriction anyway
      fileSize: 10 * 1024 * 1024,
    },
  });

  const upload = {};
  const fileWrites = [];
  const tmpdir = Tmpdir();

  busboy.on('file', (fieldname, file, { filename, encoding, mimeType }) => {
    const filepath = join(tmpdir, filename);
    const writeStream = createWriteStream(filepath);

    file.pipe(writeStream);

    fileWrites.push(
      new Promise<void>((resolve, reject) => {
        file.on('end', () => writeStream.end());

        writeStream.on('finish', () => {
          readFile(filepath, (err, buffer) => {
            const size = Buffer.byteLength(buffer);

            if (err) return reject(err);

            Object.assign(upload, {
              fieldname,
              originalname: filename,
              encoding,
              mimeType,
              buffer,
              size,
            });

            try {
              unlinkSync(filepath);
            } catch (error) {
              return reject(error);
            }

            resolve();
          });
        });

        writeStream.on('error', reject);
      }),
    );
  });

  busboy.on('finish', async () => {
    await Promise.all(fileWrites).then(() => {
      req.file = upload;

      next();
    });
  });

  req.pipe(busboy);
}
