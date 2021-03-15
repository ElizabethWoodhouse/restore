import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import user from './reducers/users';
import tracker from './reducers/tracker';
import entry from './reducers/dailygratitude';
import { getFirebase, firebaseReducer } from 'react-redux-firebase'; //npm install --save react-redux-firebase
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from '../firebase';
import { logger } from 'redux-logger';

// const fbConfig = {}; //firebase config;
const middlewares = [
	logger,
	thunkMiddleware.withExtraArgument({ getFirebase, getFirestore }),
];

const reducers = combineReducers({
	rootReducer,
	firebaseReducer,
	user,
	tracker,
	entry,
});

export default createStore(
	reducers,
	compose(applyMiddleware(...middlewares), reduxFirestore(fbConfig))
);
