import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyCN9C-H3tfC1R7t0zyvY_6Hv0cEyNZ7gUA',
	authDomain: 'habit-tracker-fee9e.firebaseapp.com',
	projectId: 'habit-tracker-fee9e',
	storageBucket: 'habit-tracker-fee9e.appspot.com',
	messagingSenderId: '500067803496',
	appId: '1:500067803496:web:ad694930de693009a0b6dd',
	measurementId: 'G-JFN7S3NCZY',
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

//get user model
export const Users = db.collection('users');
export default firebase;
