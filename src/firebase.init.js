// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLHcp3Z2qOOizIIp2lUO3I2bgfdjvUfRM',
  authDomain: 'independent-service-prov-36dfb.firebaseapp.com',
  projectId: 'independent-service-prov-36dfb',
  storageBucket: 'independent-service-prov-36dfb.appspot.com',
  messagingSenderId: '293812218503',
  appId: '1:293812218503:web:c1a08426a94ab2c85d6622'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
