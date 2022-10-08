import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import analyticsStatus from 'firebase/analytics';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const FIREBASE_API_KEY = process.env.NODE_FIREBASE_API_KEY;

// App's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'food-hub-dcoder.firebaseapp.com',
  projectId: 'food-hub-dcoder',
  storageBucket: 'food-hub-dcoder.appspot.com',
  messagingSenderId: '627059676559',
  appId: '1:627059676559:web:359c47fcb852155169a7fa',
  measurementId: 'G-EPHS2QFT4W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = null;

// analyticsStatus.isSupported().then((isSupported) => {
//   if (isSupported) {
//     analytics = getAnalytics(app);
//   }
// });

// Create a storage reference from our storage service
const storage = getStorage(app);

export const uploadImageFireBase = async (url_name, file) => {
  return new Promise((resolve, reject) => {
    const metadata = {
      contentType: file.mimeType,
    };
    const storageRef = ref(storage, `${url_name}/${file.originalname}`);

    // Upload file and metadata
    const uploadTask = uploadBytesResumable(storageRef, file.buffer, metadata);

    // Listen for state changes, errors, and completion of the upload
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized': //User doesn't have permission to access the object
            console.log(`User doesn't have permission to access the object`);
            break;
          case 'storage/canceled': // User canceled the upload
            console.log(`User canceled the upload`);
            break;
          case 'storage/unknown': // Unknown error occurred, inspect error.serverResponse
            console.log(`Unknown error occurred, inspect error.serverResponse`);
            console.log(error);
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          resolve(downloadURL);
        });
      },
    );
  });
};
