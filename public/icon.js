import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Icon = () => (
	<View>
		<Image style={styles.image} source={require('./restore-logo.png')} />
	</View>
);

export default Icon;

const styles = StyleSheet.create({
	image: {
		width: 550,
		height: 500,
	},
});
