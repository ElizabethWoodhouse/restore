import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import user from './reducers/users';
import habits from './reducers/habits';
import { getFirebase, firebaseReducer } from 'react-redux-firebase'; //npm install --save react-redux-firebase

const fbConfig = {}; //firebase config;
const middlewares = [thunkMiddleware.withExtraArgument(getFirebase)];

const reducers = combineReducers({
	rootReducer,
	firebaseReducer,
	user,
	habits,
});

export default createStore(reducers, compose(applyMiddleware(...middlewares)));
