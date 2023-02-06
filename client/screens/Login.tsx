import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../reducers/users';
import LoginImage from '../../public/js-images/login-image';
import firebase from '../../firebase.js';
import { AppDispatch, RootState } from '../store';

interface LoginProps {
	login: any; // Elly come back - Redux
	navigation: any; // Elly come back - navigation
};

const Login:React.FC<LoginProps> =(props) =>{
	const [initializing, setInitializing] = useState<boolean>(true);
	const [user, setUser] = useState<string|null>(null)
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
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
	const onLoginPress = async () => {
		const login = await props.login(email, password);
		console.log('LOGIN SCREEN', login);
	};
	return (
		<SafeAreaView style={styles.container}>
			<LoginImage />
			<TextInput
				style={styles.textInput}
				placeholder='Email'
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
		backgroundColor: '#6FB8B7',
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

const mapStateToProps = (state: RootState) => ({
	user: state.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		login: (email: string, password: string) => dispatch(getUser(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
