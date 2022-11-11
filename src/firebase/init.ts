import { initializeApp } from 'firebase/app'

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
