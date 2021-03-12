import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const DailyGratitudeImage = () => (
	<View>
		<Image
			style={styles.image}
			source={require('../png-images/dailygratitude.png')}
		/>
	</View>
);



export default DailyGratitudeImage;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 190,
	},
});
