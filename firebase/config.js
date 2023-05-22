import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBQFWQicQqvEGqWVKvbiCd34zJHeK_MdtU',
  authDomain: 'rn-imagelibrary.firebaseapp.com',
  projectId: 'rn-imagelibrary',
  storageBucket: 'rn-imagelibrary.appspot.com',
  messagingSenderId: '854232737821',
  appId: '1:854232737821:web:7882200d08c86913ad7ef4',
  measurementId: 'G-SR7QX9C8GN',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
