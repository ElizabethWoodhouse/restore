import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../reducers/users';

function LoginScreen(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onLoginPress = () => {
		props.login(email, password);
		props.navigation.replace('Main');
	};
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>Please log in below:</Text>
			<TextInput
				style={styles.textInput}
				placeholder='Email'
				onChangeText={(text) => setEmail(text)}
				value={email}
			/>
			<TextInput
				style={styles.textInput}
				placeholder='password'
				onChangeText={(text) => setPassword(text)}
				value={password}
			/>
			<TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
				<Text style={styles.buttonText}>Log in</Text>
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
		backgroundColor: '#3da0c2',
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
		padding: 20,
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
		login: (email, password) => dispatch(getUser(email, password)),
	};
};

export default connect(null, mapDispatchToProps)(LoginScreen);
