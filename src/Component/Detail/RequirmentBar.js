import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../constants'
const RequirmentBar = ({ icon, barPercentage }) => {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Image source={icon} resizeMode="cover" style={styles.image} />
			</View>
			{/* Bar */}
			<View style={styles.bar1}></View>
			<View style={[styles.bar2, { width: barPercentage }]}></View>
		</View>
	)
}

export default RequirmentBar

const styles = StyleSheet.create({
	container: {
		height: 60,
		alignItems: 'center',
	},
	wrapper: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: COLORS.gray,
	},
	image: {
		tintColor: COLORS.secondary,
		height: 30,
		width: 30,
	},
	bar1: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 3,
		marginTop: SIZES.base,
		backgroundColor: COLORS.gray,
	},
	bar2: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		height: 3,
		marginTop: SIZES.base,
		backgroundColor: COLORS.primary,
	},
})
