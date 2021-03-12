import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';

function Welcome(props) {
	//if user is already logged in then go to Main Page
	useEffect(() => {
		console.log(props);
		if (props.userId === '') {
			props.navigation.replace('Main');
		}
	});
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.headline}>Restore</Text>
			<Text style={styles.innerText}>Self-care at your fingertips</Text>
			<Button
				style={styles.button}
				color='#A3D2CA'
				title='New User'
				onPress={() => props.navigation.navigate('Register')}
			/>
			<Button
				style={styles.button}
				color='#A3D2CA'
				title='Log in'
				onPress={() => props.navigation.navigate('Login')}
			/>
		</SafeAreaView>
	);
}

const mapStateToProps = (state) => ({
	userId: state.user,
});

export default connect(mapStateToProps)(Welcome);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6FB8B7',
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
		backgroundColor: '#A3D2CA',
	},
});
