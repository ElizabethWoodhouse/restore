import { firebase } from '../../firebase.js';

//actionConstant
const SET_HABIT = 'SET_HABIT';
const GET_HABIT = 'GET_HABIT';

//actionCreator
const setAHabit = (newHabit) => {
	return {
		type: SET_HABIT,
		newHabit,
	};
};
const getHabits = (habits) => {
	return {
		type: GET_HABIT,
		habits,
	};
};

//thunks
export const setHabit = (newHabit) => {
	return (dispatch) => {

	};
};

export const getAllHabits = () => {
	return (dispatch) => {

	};
};



//reducer
export default (state = [], action) => {
	switch (action.type) {
		case SET_HABIT:
			return [...state, action.newHabit];
		case GET_HABIT:
			return action.habits;
		default:
			return state;
	}
};


