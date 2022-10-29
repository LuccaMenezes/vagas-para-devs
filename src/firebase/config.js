import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBamr51MTlcvHvEFIEu_t1D9IWWt3xK76g",
  authDomain: "vagas-para-devs.firebaseapp.com",
  projectId: "vagas-para-devs",
  storageBucket: "vagas-para-devs.appspot.com",
  messagingSenderId: "794966173295",
  appId: "1:794966173295:web:fc1562b461b3a2825ccf9a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };