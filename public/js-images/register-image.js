import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const RegisterImage = () => (
	<View>
		<Image
			style={styles.image}
			source={require('../png-images/register.png')}
		/>
	</View>
);

export default RegisterImage;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 190,
	},
});
