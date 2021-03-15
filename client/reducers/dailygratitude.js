import db from '../../firebase.js';

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

const setEntry = (newEntry) => {
	return {
		type: SET_ENTRY,
		newEntry,
	};
};

//thunks
//need to update to fetch entry
export const fetchEntry = (userId, date) => {
	return (dispatch) => {
		try {
			db()
				.collection('dailyGratitudeHistory')
				.where('userId', '==', userId)
				.where('date', '==', date)
				.limit(1)
				.get()
				.then((querySnapshot) => {
					dispatch(getEntry(querySnapshot));
				});
		} catch (error) {
			console.log(error);
		}
	};
	//get all task status
};

//need to update to save entry
export const saveEntry = (entry, userId, date) => {
	return (dispatch) => {
		try {
			db()
				.collection('dailyGratitudeHistory')
				.add({
					date: date,
					text: entry,
					userId: userId,
				})
				.then(() => {
					console.log('Entry added!');
					dispatch(setEntry(entry));
				});
		} catch (error) {
			console.log(error);
		}
	};
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
