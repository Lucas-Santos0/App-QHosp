
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDOwchIXrJgzFs-LHrpdEWIbPmSL5NzuGw",
  authDomain: "qhosp---suporte-hospitalar.firebaseapp.com",
  projectId: "qhosp---suporte-hospitalar",
  storageBucket: "qhosp---suporte-hospitalar.firebasestorage.app",
  messagingSenderId: "556238705129",
  appId: "1:556238705129:web:8edb6b6ef3c859ba233b78",

};

// Garante que só inicializa o Firebase uma vez
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Exporta os serviços que serão usados no app
export const auth = getAuth(app);
export const firestore = getFirestore(app);
