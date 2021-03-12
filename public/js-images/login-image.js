import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const LoginImage = () => (
	<View>
		<Image
			style={styles.image}
			source={require('../png-images/login.png')}
		/>
	</View>
);

export default LoginImage;

const styles = StyleSheet.create({
	image: {
		width: 400,
		height: 190,
	},
});
