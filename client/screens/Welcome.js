import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

function Welcome({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.headline}>Habit Tracker</Text>
			<Text style={styles.innerText}>
				The app that helps you reach your goals
			</Text>
			<Button
				title='log in'
				style={styles.button}
				onPress={() => navigation.navigate('Login')}
			/>
			<Button
				title='register'
				style={styles.button}
				onPress={() => navigation.navigate('Register')}
			/>
		</SafeAreaView>
	);
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3da0c2',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headline: {
		color: 'white',
		fontSize: 60,
		fontWeight: 'bold',
	},
	innerText: {
		color: 'white',
		fontSize: 20,
		padding: 10,
	},
	button: {
		marginBottom: 20,
		padding: 20,
	},
});
