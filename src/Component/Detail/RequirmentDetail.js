import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
const RequirmentDetail = ({ icon, label, detail }) => {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Image source={icon} resizeMode="cover" style={styles.img} />
				<Text style={styles.txt}>{label}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.textDetail}>{detail}</Text>
			</View>
		</View>
	)
}

export default RequirmentDetail

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	wrapper: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
	},
	img: {
		height: 30,
		width: 30,
	},
	txt: {
		marginLeft: SIZES.base,
		color: COLORS.secondary,
		...FONTS.h2,
	},
	detail: {
		flex: 1,
		alignItems: 'flex-end',
	},
	textDetail: {
		marginLeft: SIZES.base,
		color: COLORS.gray,
		...FONTS.h2,
	},
})
