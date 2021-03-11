import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHabit, getAllHabits } from '../reducers/habits';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	FlatList,
	Switch,
} from 'react-native';

class MainHabit extends Component {
	constructor(props) {
		super(props);
		this.state = { habits: [], isEnabled: false, newHabit: '' };
		this.addAHabit = this.addAHabit.bind(this);
	}
	// componentDidMount() {
	// 	//load habits here
	// }

	addAHabit = () => {
		console.log('I am here');
		// this.setState({ habits: [...this.state.habits, text] });
		// createHabit(newHabit);
	};
	render() {
		const { habitList, createHabit, getHabits } = this.props;
		const { habits, isEnabled, newHabit, addAHabit } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.header}>Track your daily habits</Text>
				<FlatList
					data={habits}
					renderItem={({ item }) => (
						<Text style={styles.habit}>
							<Switch
								trackColor={{ false: '#767577', true: '#81b0ff' }}
								thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
								onValueChange={() => this.setState({ isEnabled: !isEnabled })}
								value={isEnabled}
							/>
							{item}
						</Text>
					)}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Add a habit here'
					onChangeText={(text) =>
						this.setState({ newHabit: text })
					}></TextInput>
				<TouchableOpacity
					style={styles.button}
					onPress={(evt) => {
						this.setState({ habits: [...this.state.habits, newHabit] });
						this.setState({ newHabit: '' });
					}}>
					<Text style={styles.buttonText}>Add a habit</Text>
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
		backgroundColor: '#3da0c2',
	},
	header: {
		flex: 1,
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		color: 'white',
	},
	textInput: {
		width: 250,
		height: 25,
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
	habit: {
		backgroundColor: '#ADD8E6',
		width: 250,
		height: 25,
		borderRadius: 14,
		fontWeight: '500',
	},
});

const mapStateToProps = (state) => ({
	habitList: state.habits,
});

const mapDispatchToProps = (dispatch) => {
	return {
		createHabit: (newHabit) => dispatch(setHabit(newHabit)),
		getHabits: () => dispatch(getAllHabits()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHabit);
