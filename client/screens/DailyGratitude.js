import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../reducers/tracker';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TextInput,
	Button,
	View,
} from 'react-native';

class DailyGratitude extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.header}>Daily Gratitude</Text>
				<TextInput
					// style={styles.textInput}
					placeholder='What are you grateful for today?'
					// onChangeText={(text) => setEmail(text)}
					// value={email}
				/>
				<Button
					style={styles.button}
					color='#A3D2CA'
					title='Save Daily Gratitude'
					// onPress={() => props.navigation.navigate('Login')}
				/>
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
	taskContainer: {
		flex: 1,
		//bring tasks up
	},
	header: {
		flex: 1,
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		color: '#056676',
	},
	button: {
		marginBottom: 20,
		padding: 20,
		backgroundColor: '#A3D2CA',
	},
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyGratitude);
