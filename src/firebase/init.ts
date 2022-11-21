import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
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

export const auth = getAuth(app)
export const db = getFirestore(app)

// If on localhost, use all firebase services locally
if (location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
  connectFirestoreEmulator(db, 'localhost', 8080)
}
