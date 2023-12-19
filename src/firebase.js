import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUlJjs_O4qtum_1iHYYEBHzntBjimi6uY",
    authDomain: "fir-new1-27275.firebaseapp.com",
    projectId: "fir-new1-27275",
    storageBucket: "fir-new1-27275.appspot.com",
    messagingSenderId: "944499555340",
    appId: "1:944499555340:web:96eb19cc89bd1ddc814229"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };