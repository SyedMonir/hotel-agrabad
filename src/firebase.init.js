// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD71WEbnr2diQxM_6NXAI9u_tkDNTMk5ZI',
  authDomain: 'hotel-agrabad.firebaseapp.com',
  projectId: 'hotel-agrabad',
  storageBucket: 'hotel-agrabad.appspot.com',
  messagingSenderId: '249140523504',
  appId: '1:249140523504:web:1b12f1d9f06e84f8a3ad35',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
