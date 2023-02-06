import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	View,
} from 'react-native';
import MeditateImage from '../../public/js-images/meditate-image';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const Meditate = (props) => {
	const [isTimerOn, setIsTimerOn] = useState<boolean>(false)
	const handleToggle = () => {
		setIsTimerOn(!isTimerOn)
	}
 	return (
		<SafeAreaView style={styles.container}>
		<MeditateImage />
		<View style={styles.taskContainer}>
			<CountdownCircleTimer
				isPlaying={isTimerOn}
				duration={5}
				colors='#056676'
				size={360}
				onComplete={() => {
					props.navigation.replace('Welcome');
				}}></CountdownCircleTimer>
		</View>
		<View style={styles.taskContainer}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleToggle()}>
				<Text style={styles.buttonText}>
					{isTimerOn ? 'Pause' : 'Start'}
				</Text>
			</TouchableOpacity>
		</View>
	</SafeAreaView>
	)
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
