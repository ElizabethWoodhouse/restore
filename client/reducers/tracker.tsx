//actionConstant
const GET_TASKS = 'GET_TASKS';
const UPDATE_TASK = 'UPDATE_TASK';


//actionCreator
const getTasks = (tasks) => {
	return {
		type: GET_TASKS,
		tasks,
	};
};
//is there a way to flip boolean for specific item
const updateTask = (updatedTask) => {
	return {
		type: UPDATE_TASK,
		updatedTask,
	};
};


//thunks
export const fetchTasks = (tasks) => {
	return (dispatch) => {
	};
	//get all task status
};
export const completeTask = (task) => {
	return (dispatch) => { };
	//update task to true
};


//unsure if this is the best way to keep this state
const initialState = [];

//reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TASKS:
			return action.tasks;
		case UPDATE_TASK:
			return [ ...state, action.updatedTask ];
		default:
			return state;
	}
};


