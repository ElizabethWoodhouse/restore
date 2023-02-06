import firebase from '../../firebase.js';

//actionConstant
const SET_USER = 'SET_USER';
const GET_USER = 'GET_USER';

//actionCreator
const setAUser = (newUserId?: string) => {
	return {
		type: SET_USER,
		newUserId,
	};
};
const getExistingUser = (userId?: string) => {
	return {
		type: GET_USER,
		userId,
	};
};

//thunks
export const setUser = (fullName: string, email: string, password:string) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const userId = userCredentials?.user?.uid;
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
						dispatch(setAUser(userId));
					});
			})
			.catch((error) => {
				console.log(error.code, error.message);
			});
	};
};

//resource: https://react-redux-firebase.com/docs/integrations/thunks.html
export const getUser = (email:string, password:string) => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				var userId = userCredentials?.user?.uid;
				dispatch(getExistingUser(userId));
			})
			.catch((error) => {
				console.log(error.code, error.message);
			});
	};
};

export const signOut = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			console.log('sign-out successful');
		})
		.catch((error) => {
			console.log(error.code);
		});
};

const initialState = '';

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return action.newUserId;
		case GET_USER:
			return action.userId;
		default:
			return state;
	}
};
