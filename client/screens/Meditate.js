import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../reducers/tracker';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	View,
} from 'react-native';
import MeditateImage from '../../public/js-images/meditate-image';

class Meditate extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<MeditateImage />
				<View style={styles.taskContainer}>
					<TouchableOpacity></TouchableOpacity>
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
		//bring tasks up
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Meditate);
