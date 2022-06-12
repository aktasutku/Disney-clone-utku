import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY3bpnOt76zfpxLWDeK4b-V1SoaIWiCrU",
  authDomain: "disneyplus-utku.firebaseapp.com",
  projectId: "disneyplus-utku",
  storageBucket: "disneyplus-utku.appspot.com",
  messagingSenderId: "380879361385",
  appId: "1:380879361385:web:999fdc41397f631b6c59f8",
  measurementId: "G-8JYNKRS3BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {auth , provider , storage , analytics}
export default db