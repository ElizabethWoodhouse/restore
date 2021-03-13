import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const MeditateImage = () => (
	<View>
		<Image
			style={styles.image}
			source={require('../png-images/meditate.png')}
		/>
	</View>
);

export default MeditateImage;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 190,
	},
});
