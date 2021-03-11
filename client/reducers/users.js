import { firebase } from '../../firebase.js';

//actionConstant
const SET_USER = 'SET_USER';
const GET_USER = 'GET_USER';

//actionCreator
const setAUser = (newUser) => {
	return {
		type: SET_USER,
		newUser,
	};
};
const getExistingUser = (user) => {
	return {
		type: GET_USER,
		user,
	};
};

//thunks
export const setUser = (fullName, email, password) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const userId = userCredentials.user.uid;
				const data = {
					id: userId,
					email,
					fullName,
				};
				const usersRef = firebase.firestore().collection('users');
				usersRef
					.doc(userId)
					.set(data)
					.then(() => {
						dispatch(setAUser({ user: data }));
					});
			})
			.catch((error) => {
				alert(error.message);
				console.log(error.code, error.message);
			});
	};
};
//resource: https://react-redux-firebase.com/docs/integrations/thunks.html

export const getUser = (email, password) => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const userId = userCredentials.user.uid;
				const userRef = firebase.firestore().collection('users');
				userRef
					.doc(userId)
					.get()
					.then((firestoreDocument) => {
						if (!firestoreDocument.exists) {
							alert('User does not exist');
							return;
						}
						const user = firestoreDocument.data();
						dispatch(getExistingUser({ user }));
					});
			})
			.catch((error) => {
				alert(error);
			});
	};
};

const initialState = {
	user: {},
};

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return action.newUser;
		case GET_USER:
			return action.user;
		default:
			return state;
	}
};

// Elizabeth@email.com
//HelloThere!
