import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../reducers/tracker';
import { fetchEntry, setEntry } from '../reducers/dailygratitude';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import DailyGratitudeImage from '../../public/js-images/dailygratitude-image';

class DailyGratitude extends Component {
	constructor(props) {
		super(props);
		this.state = {
			entry: '',
		};
	}
	componentDidMount() {
		// const today = new date();
		// this.props.getEntry(this.props.userId, today);
	}
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<DailyGratitudeImage />
				<View style={styles.taskContainer}>
					<TextInput
						style={styles.textInput}
						multiline={true}
						onChangeText={(text) => this.setState({ entry: text })}
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							//call on the thunks to save what is currently in daily gratitude
							this.props.navigation.replace('Main');
						}}>
						<Text style={styles.buttonText}>Save Entry</Text>
					</TouchableOpacity>
				</View>
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
	},
	textInput: {
		width: 600,
		height: 400,
		margin: 10,
		padding: 8,
		borderRadius: 14,
		backgroundColor: '#5F9E9D',
		fontSize: 18,
		fontFamily: 'AvenirNext-Regular',
		color: '#4C322B',
	},
	button: {
		alignSelf: 'center',
		color: 'transparent',
		padding: 10,
		borderColor: '#4C322B',
		width: 150,
		borderRadius: 20,
		borderWidth: 0.5,
		marginTop: 20,
	},
	buttonText: {
		alignSelf: 'center',
		fontSize: 20,
		color: '#4C322B',
		fontFamily: 'GillSans-LightItalic',
	},
});

const mapStateToProps = (state) => ({
	entry: state.entry,
	userId: state.user,
	//entry inputted
});

const mapDispatchToProps = (dispatch) => {
	return {
		getEntry: (userId, date) => dispatch(fetchEntry(userId, date)),
		setEntry: (entry, userId, date) => dispatch(setEntry(entry, userId, date)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyGratitude);
