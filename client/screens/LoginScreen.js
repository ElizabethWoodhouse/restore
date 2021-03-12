import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../reducers/users';

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
				<Text style={styles.header}>Please log in below:</Text>
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
					placeholder='password'
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

const mapStateToProps = (state) => ({
	userId: state.user,
});

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(getUser(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
