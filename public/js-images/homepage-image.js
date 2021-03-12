import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const HomePageImage = () => (
	<View>
		<Image
			style={styles.image}
			source={require('../png-images/homepage.png')}
		/>
	</View>
);

export default HomePageImage;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 190,
	},
});
