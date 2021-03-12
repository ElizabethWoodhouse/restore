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

class Meditate extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.header}>Meditate</Text>
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
		flex: 1,
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		color: '#056676',
	},
	button: {
		width: 500,
		height: 50,
		margin: 10,
		padding: 8,
		borderRadius: 10,
		backgroundColor: '#A3D2CA',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		color: '#056676',
	},
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Meditate);
