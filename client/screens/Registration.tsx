import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../reducers/users';
import {
	StyleSheet,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	Text,
} from 'react-native';
import RegisterImage from '../../public/js-images/register-image';
import firebase from '../../firebase.js';

interface RegistrationScreenProps {
	createUser: any; // Elly come back - Redux
	navigation: any; // Elly come back - navigation
};

const Registration:React.FC<RegistrationScreenProps>= (props) => {
	const [initializing, setInitializing] = useState<boolean>(true);
	const [user, setUser] = useState<string | null>(null);
	const [fullName, setFullName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const onAuthStateChanged = (user:string) => {
		setUser(user);
		if (initializing) setInitializing(false);
		if (user) {
			props.navigation.navigate('Welcome');
		}
	};
	useEffect(() => {
		// @ts-ignore-next-line comment: will be moving off firebase soon
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);
	if (initializing) return null;
	const onRegisterPress = () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		props.createUser(fullName, email, password);
	};
	return (
		<SafeAreaView style={styles.container}>
			<RegisterImage />
			<TextInput
				style={styles.textInput}
				placeholder='Full Name'
				onChangeText={(text) => setFullName(text)}
				value={fullName}
			/>
			<TextInput
				style={styles.textInput}
				placeholder='Email'
				onChangeText={(text) => setEmail(text)}
				value={email}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textInput}
				placeholder='Password'
				onChangeText={(text) => setPassword(text)}
				value={password}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textInput}
				placeholder='Confirm password'
				onChangeText={(text) => setConfirmPassword(text)}
				value={confirmPassword}
			/>
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
		backgroundColor: '#5F9E9D',
		fontSize: 18,
		fontFamily: 'AvenirNext-Regular',
		color: '#4C322B',
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

const mapDispatchToProps = (dispatch) => {
	return {
		createUser: (fullName, email, password) =>
			dispatch(setUser(fullName, email, password)),
	};
};

export default connect(null, mapDispatchToProps)(Registration);
