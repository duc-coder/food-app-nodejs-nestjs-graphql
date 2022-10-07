import os from 'os';
import fs from 'fs';
import path from 'path';
import Busboy from 'busboy';

export function BusboyMiddleware(req, res, next) {
  // req.file is the `image` file
  // req.body will hold the text fields, if there were any req.headers['content-type'].includes('multipart/form-data')
  if (req.body.operationName == 'UpdateRestaurantImage') {
    req.headers['content-type'] =
      'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW';
    req['file'] = req.body.variables.image;

    const busboy = Busboy({
      headers: req.headers,
      limits: {
        // Cloud functions impose this restriction anyway
        fileSize: 10 * 1024 * 1024,
      },
    });

    const uploads = [];
    const fileWrites = [];
    const tmpdir = os.tmpdir();

    busboy.on('file', (fieldname, file, { filename, encoding, mimeType }) => {
      const filepath = path.join(tmpdir, filename);
      console.log('=======filepath======');
      console.log(filepath);
      console.log('=============');
      // console.log(
      //     `Handling file upload field ${fieldname}: ${filename} (${filepath})`
      // );

      const writeStream = fs.createWriteStream(filepath);
      file.pipe(writeStream);

      fileWrites.push(
        new Promise<void>((resolve, reject) => {
          file.on('end', () => {
            writeStream.end();
          });
          writeStream.on('finish', () => {
            fs.readFile(filepath, (err, buffer) => {
              const size = Buffer.byteLength(buffer);
              //   console.log(`${filename} is ${size} bytes`);
              if (err) {
                return reject(err);
              }

              uploads.push({
                fieldname,
                originalname: filename,
                encoding,
                mimeType,
                buffer,
                size,
              });

              try {
                fs.unlinkSync(filepath);
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
        req.file = uploads;
        // req.body.variables.file = uploads;
        next();
      });
    });

    console.log('=======busboy======');
    console.log(busboy);
    console.log('=============');

    req.pipe(busboy);
  } else {
    next();
  }
}
