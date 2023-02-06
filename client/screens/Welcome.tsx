import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from '../../public/js-images/main-image';
import HomePageImage from '../../public/js-images/homepage-image';
import firebase from '../../firebase.js';

interface WelcomeProps {
	navigation: any; // Elly come back - navigation
};

const Welcome: React.FC<WelcomeProps> = (props) => {
	const [initializing, setInitializing] = useState<boolean>(true);
	const [user, setUser] = useState<string|null>(null);
	const onAuthStateChanged = (user)  => {
		setUser(user);
		if (initializing) setInitializing(false);
	}
	function signOut() {
		firebase
			.auth()
			.signOut()
			.then(() => console.log('User signed out!'));
	}
	// if user is already logged in then go to Main Page
	useEffect(() => {
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);
	if (initializing) return null;
	if (!user) {
		return (
			<SafeAreaView style={styles.container}>
				<Icon />
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.navigation.navigate('Register')}>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.navigation.navigate('Login')}>
					<Text style={styles.buttonText}>Log In</Text>
				</TouchableOpacity>
			</SafeAreaView>
		);
	}
	//if user is logged in show this page
	return (
		<SafeAreaView style={styles.container}>
			<HomePageImage />
			<View style={styles.taskContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.navigation.navigate('Meditate')}>
					<Text style={styles.buttonText}>Meditate</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.navigation.navigate('Gratitude')}>
					<Text style={styles.buttonText}>Daily Gratitude</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={signOut}>
					<Text style={styles.buttonText}>Sign Out</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6FB8B7',
	},
	taskContainer: {
		flex: 1,
	},
	button: {
		color: 'transparent',
		alignItems: 'center',
		padding: 10,
		borderColor: '#4C322B',
		width: 150,
		borderRadius: 20,
		borderWidth: 0.5,
		marginTop: 20,
	},
	buttonText: {
		fontSize: 20,
		color: '#4C322B',
		fontFamily: 'GillSans-LightItalic',
	},
});

export default Welcome
