import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { icons, COLORS } from '../../constants'
const CameraButton = () => {
	return (
		<View style={styles.container}>
			<Image source={icons.camera} resizeMode="contain" style={styles.camera} />
		</View>
	)
}

export default CameraButton

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: COLORS.primary,
	},
	camera: {
		height: 23,
		width: 23,
	},
})
