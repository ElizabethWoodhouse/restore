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

function LoginScreen(props) {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const onAuthStateChanged = (user) => {
		setUser(user);
		if (initializing) setInitializing(false);
		if (user) {
			props.navigation.navigate('Welcome');
		}
	};
	useEffect(() => {
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);
	if (initializing) return null;
	const onLoginPress = () => {
		props.login(email, password);
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

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(getUser(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

// export class LoginScreen extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			email: '',
// 			password: '',
// 			userId: '',
// 		};
// 		this.onLoginPress = this.onLoginPress.bind(this);
// 	}
// 	onLoginPress() {
// 		this.props.login(this.state.email, this.state.password);
// 		console.log('USERID', this.props.userId);
// 		//ability to ensure logged in user is actually right
// 		// this.props.navigation.navigate('Welcome');
// 	}
// 	render() {
// 		const { email, password } = this.state || '';
// 		return (
// 			<SafeAreaView style={styles.container}>
// 				<LoginImage />
// 				<TextInput
// 					style={styles.textInput}
// 					placeholder='Email'
// 					onChangeText={(evt) => {
// 						this.setState({ email: evt });
// 					}}
// 				/>
// 				<TextInput
// 					secureTextEntry={true}
// 					style={styles.textInput}
// 					placeholder='Password'
// 					onChangeText={(evt) => {
// 						this.setState({ password: evt });
// 					}}
// 				/>
// 				<TouchableOpacity
// 					style={styles.button}
// 					onPress={() => this.onLoginPress()}>
// 					<Text style={styles.buttonText}>Log in</Text>
// 				</TouchableOpacity>
// 			</SafeAreaView>
// 		);
// 	}
// }

// export default function Welcome(props) {
// 	const [initializing, setInitializing] = useState(true);
// 	const [user, setUser] = useState();
// 	function onAuthStateChanged(user) {
// 		setUser(user);
// 		if (initializing) setInitializing(false);
// 	}
// 	function signOut() {
// 		firebase
// 			.auth()
// 			.signOut()
// 			.then(() => console.log('User signed out!'));
// 	}
// 	// if user is already logged in then go to Main Page
// 	useEffect(() => {
// 		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
// 		return subscriber; // unsubscribe on unmount
// 	}, []);
// 	if (initializing) return null;
// 	}
// }
