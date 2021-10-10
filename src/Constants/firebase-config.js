// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB7Ux9qUzIyapGM7D69Q_xkW83Z1J9zYkU',
	authDomain: 'krissbeths-world.firebaseapp.com',
	projectId: 'krissbeths-world',
	storageBucket: 'krissbeths-world.appspot.com',
	messagingSenderId: '1091436116499',
	appId: '1:1091436116499:web:edb06e47e7a9aae4799de6',
	measurementId: 'G-TVFQD9MRPF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
