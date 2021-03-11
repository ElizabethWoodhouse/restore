import 'react-native-gesture-handler'; //provides native-driven gesture management APIs for building best possible touch-based experiences in React Native
import React, { useState, useEffect } from 'react';
//redux
import { Provider } from 'react-redux';
import store from './client/store';
import { firebase } from './firebase';

//Navigation
//Import other screens in my application
import {
	Welcome,
	MainHabit,
	Analytics,
	LoginScreen,
	Registration,
} from './client/screens/index';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//information on navigation props:
//documentation: https://reactnative.dev/docs/navigation
//////navigation.navigate('RouteName'): pushes a new route to stack navigator if it's not already in the stack.
//////navigation.push('Routename'): continue pushing routes to top of stack
//////navigation.goBack(): go back to the last route on the stack
//////navigation.popToTop(): goes to the first screen in the stack

function App() {
	//useState: Hook that lets you add React state to function components. (ability to add state in functions)
	//documentation: https://reactjs.org/docs/hooks-state.html
	const [user, setUser] = useState(null);
	useEffect(() => {
		const usersRef = firebase.firestore().collection('users');
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				usersRef
					.doc(user.uid)
					.get()
					.then((document) => {
						const userData = document.data();
						setUser(userData);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	}, []);
	return (
		<Provider store={store}>
			<NavigationContainer> 
				<Stack.Navigator initialRouteName='Welcome'>
					<Stack.Screen name='Welcome' component={Welcome} />
					<Stack.Screen name='Main' component={MainHabit} />
					<Stack.Screen name='Login' component={LoginScreen} />
					<Stack.Screen name='Register' component={Registration} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;

// {user?'Main':'Welcome'}