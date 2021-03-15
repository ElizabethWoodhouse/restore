import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../reducers/tracker';
import { fetchEntry, saveEntry } from '../reducers/dailygratitude';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import DailyGratitudeImage from '../../public/js-images/dailygratitude-image';

function DailyGratitude(props) {
	const date = new Date();
	const [initializing, setInitializing] = useState(true);
	const [entry, setEntry] = useState('');
	const onSave = () => {
		saveEntry(entry, props.userId, date);
		//need to actually save the entry
		props.navigation.navigate('Welcome');
	};
	return (
		<SafeAreaView style={styles.container}>
			<DailyGratitudeImage />
			<View style={styles.taskContainer}>
				<TextInput
					style={styles.textInput}
					multiline={true}
					autoCorrect={true}
					onChangeText={(text) => setEntry(text)}
				/>
				<TouchableOpacity style={styles.button} onPress={onSave}>
					<Text style={styles.buttonText}>Save Entry</Text>
				</TouchableOpacity>
			</View>
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
	taskContainer: {
		flex: 1,
	},
	textInput: {
		width: 350,
		height: 350,
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
});

const mapDispatchToProps = (dispatch) => {
	return {
		getEntry: (userId, date) => dispatch(fetchEntry(userId, date)),
		saveEntry: (entry, userId, date) =>
			dispatch(saveEntry(entry, userId, date)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyGratitude);
