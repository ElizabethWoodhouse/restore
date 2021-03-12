import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	View,
} from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../reducers/users';
import LoginImage from '../../public/login-image';

export class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			userId: '',
		};
		this.onLoginPress = this.onLoginPress.bind(this);
	}
	onLoginPress() {
		this.props.login(this.state.email, this.state.password);
		//ability to ensure logged in user is actually right
		this.props.navigation.replace('Main');
	}
	render() {
		const { email, password } = this.state || '';
		return (
			<SafeAreaView style={styles.container}>
				<LoginImage />
				<TextInput
					style={styles.textInput}
					placeholder='Email'
					onChangeText={(evt) => {
						this.setState({ email: evt });
					}}
				/>
				<TextInput
					secureTextEntry={true}
					style={styles.textInput}
					placeholder='Password'
					onChangeText={(evt) => {
						this.setState({ password: evt });
					}}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => this.onLoginPress()}>
					<Text style={styles.buttonText}>Log in</Text>
				</TouchableOpacity>
			</SafeAreaView>
		);
	}
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
		fontWeight: '500',
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
	userId: state.user,
});

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(getUser(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
