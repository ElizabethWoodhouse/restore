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
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

class Meditate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timerOn: false,
		};
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleToggle() {
		this.setState({ timerOn: !this.state.timerOn });
	}
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<MeditateImage />
				<View style={styles.taskContainer}>
					<CountdownCircleTimer
						isPlaying
						duration={60}
						colors='#056676'></CountdownCircleTimer>
					<TouchableOpacity
						style={styles.button}
						onPress={() => this.handleToggle()}>
						<Text style={styles.buttonText}>
							{this.state.timerOn ? 'Pause' : 'Start'}
						</Text>
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
