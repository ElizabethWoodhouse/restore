import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../reducers/users';

import {
	StyleSheet,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	Text,
} from 'react-native';

function Registration(props) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		//confirm that email is not in userDatabase
		props.createUser(fullName, email, password);
		props.navigation.replace('Main');
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>New User Registration</Text>
			<TextInput
				style={styles.textInput}
				placeholder='Full Name'
				onChangeText={(text) => setFullName(text)}
				value={fullName}
			/>
			<TextInput
				style={styles.textInput}
				placeholder='email'
				onChangeText={(text) => setEmail(text)}
				value={email}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textInput}
				placeholder='password'
				onChangeText={(text) => setPassword(text)}
				value={password}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textInput}
				placeholder='confirm password'
				onChangeText={(text) => setConfirmPassword(text)}
				value={confirmPassword}
			/>
			{/* TouchableOpacity: wrapper making views respond properly to touches.
			(press down=> opacity of wrapped view dims) */}
			<TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
				<Text style={styles.buttonText}>Create account</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

//CSS Styling
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6FB8B7',
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		color: 'white',
	},
	textInput: {
		width: 350,
		height: 55,
		margin: 10,
		padding: 8,
		borderRadius: 14,
		backgroundColor: 'white',
		fontSize: 18,
		fontWeight: '500',
	},
	button: {
		marginBottom: 20,
		width: 250,
		height: 30,
		margin: 10,
		padding: 8,
		borderRadius: 14,
		backgroundColor: 'white',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

const mapDispatchToProps = (dispatch) => {
	return {
		createUser: (fullName, email, password) =>
			dispatch(setUser(fullName, email, password)),
	};
};

export default connect(null, mapDispatchToProps)(Registration);
