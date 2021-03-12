import 'react-native-gesture-handler'; //provides native-driven gesture management APIs for building best possible touch-based experiences in React Native
import React, { useState, useEffect } from 'react';
//redux
import { Provider } from 'react-redux';
import store from './client/store';

//Navigation
//Import other screens in my application
import {
	Welcome,
	MainHabit,
	LoginScreen,
	Registration,
	Meditate,
	DailyGratitude,
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
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Welcome'>
					<Stack.Screen name='Welcome' component={Welcome} />
					<Stack.Screen name='Main' component={MainHabit} />
					<Stack.Screen name='Login' component={LoginScreen} />
					<Stack.Screen name='Register' component={Registration} />
					<Stack.Screen name='Meditate' component={Meditate} />
					<Stack.Screen name='Gratitude' component={DailyGratitude} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
