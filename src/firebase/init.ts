import { initializeApp, getApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  authDomain: 'taaskly.firebaseapp.com',
  projectId: 'taaskly',
  storageBucket: 'taaskly.appspot.com',
  messagingSenderId: '208150720043',
  appId: '1:208150720043:web:a1e89207e41668dd33846e',
  measurementId: 'G-5VBLNVLW30'
}

export const app = initializeApp(firebaseConfig)
  export let analytics:any
isSupported().then((supported) => {
  if (supported) {
     analytics = getAnalytics(app)
  }
})

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const functions = getFunctions(getApp(), 'us-central1')

// If on localhost, use all firebase services locally
if (location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectFunctionsEmulator(functions, 'localhost', 5001)
  connectStorageEmulator(storage, 'localhost', 9199)
}
