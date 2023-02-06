import { AppDispatch } from '../store';
//actionConstant
const GET_ENTRY = 'GET_ENTRY';
const SET_ENTRY = 'SET_ENTRY';

//actionCreator
const getEntry = (entry: string) => {
	return {
		type: GET_ENTRY,

		entry,
	};
};

const setEntry = (newEntry:string) => {
	return {
		type: SET_ENTRY,
		newEntry,
	};
};

//thunks
//need to update to fetch entry
export const fetchEntry = () => {
	return () => {
		//@ts-ignore - removing redux soon - incorrect usage
		getEntry();
	};
};

//need to update to save entry
export const saveEntry = (entry:string) => {
	return (dispatch: AppDispatch) => {
		dispatch(setEntry(entry));
	};
};

//unsure if this is the best way to keep this state
const initialState = '';

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ENTRY:
			return state;
		case SET_ENTRY:
			return action.newEntry;
		default:
			return state;
	}
};
