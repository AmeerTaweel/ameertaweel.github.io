import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCdyTDqRSch8La55q2saQ9MU7Uo81vJo6M',
  authDomain: 'ameer-taweel.firebaseapp.com',
  databaseURL: 'https://ameer-taweel.firebaseio.com',
  projectId: 'ameer-taweel',
  storageBucket: 'ameer-taweel.appspot.com',
  messagingSenderId: '647867907742'
}

// Initialize the firebase instance.
export const firebaseApp = firebase.initializeApp(config)
