import { initializeApp, getApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string
}

export const app = initializeApp(firebaseConfig)
  export let analytics:any
isSupported().then((supported) => {
  if (supported) {
     analytics = getAnalytics(app)
  }
})

export const auth = process.client ? getAuth(app) : {} as Auth
export const db = getFirestore(app)
export const storage = getStorage(app)
export const functions = getFunctions(getApp(), 'us-central1')

// If on localhost, use all firebase services locally
if (process.client && location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
  connectFirestoreEmulator(db, 'localhost', 8181)
  connectFunctionsEmulator(functions, 'localhost', 5001)
  connectStorageEmulator(storage, 'localhost', 9199)
}
