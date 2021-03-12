import React from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	Button,
	TouchableOpacity,
} from 'react-native';
// import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';
import Icon from '../../public/icon';

function Welcome(props) {
	//if user is already logged in then go to Main Page
	// useEffect(() => {
	// 	console.log(props);
	// 	if (props.userId === '') {
	// 		props.navigation.replace('Main');
	// 	}
	// });
	return (
		<SafeAreaView style={styles.container}>
			<Icon />
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.navigation.navigate('Register')}>
				<Text style={styles.buttonText}>Log In</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.navigation.navigate('Login')}>
				<Text style={styles.buttonText}>Register</Text>
			</TouchableOpacity>
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
	button: {
		color: 'transparent',
		alignItems: 'center',
		padding: 10,
		borderColor: '#4C322B',
		width: 150,
		borderRadius: 20,
		borderWidth: 0.5,
		marginBottom: 20,
	},
	buttonText: {
		fontSize: 20,
		color: '#4C322B',
		fontFamily: 'GillSans-LightItalic',
	},
});
