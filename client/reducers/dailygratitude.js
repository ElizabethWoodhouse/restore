import firebase from '../../firebase.js';

//actionConstant
const GET_ENTRY = 'GET_ENTRY';
const SET_ENTRY = 'SET_ENTRY';

//actionCreator
const getEntry = (entry) => {
	return {
		type: GET_ENTRY,
		entry,
	};
};

const saveEntry = (newEntry) => {
	return {
		type: SET_ENTRY,
		newEntry,
	};
};

//thunks
export const fetchEntry = (userId, date) => {
	return (dispatch) => {};
	//get all task status
};

export const setEntry = (entry, userId, date) => {
	return (dispatch) => {};
	//get all task status
};

//unsure if this is the best way to keep this state
const initialState = '';

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ENTRY:
			return action.entry;
		case SET_ENTRY:
			return action.newEntry;
		default:
			return state;
	}
};
