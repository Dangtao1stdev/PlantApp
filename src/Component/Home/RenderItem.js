import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { icons, SIZES, COLORS, FONTS } from '../../constants'
const RenderItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Image source={item.img} resizeMode="cover" style={styles.image} />
			<View style={styles.titleWrapper}>
				<Text style={styles.title}>{item.name}</Text>
			</View>
			<TouchableOpacity style={styles.imgWrapper} onPress={()=>{}}>
				<Image
					source={item.favorite ? icons.heartRed : icons.heartGreenOutline}
					resizeMode="contain"
					style={{
						height: 20,
						width: 20,
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default RenderItem

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: SIZES.base,
	},
	image: {
		width: SIZES.width * 0.23,
		height: '82%',
		borderRadius: 15,
	},
	titleWrapper: {
		position: 'absolute',
		bottom: '17%',
		right: 0,
		backgroundColor: COLORS.primary,
		paddingHorizontal: SIZES.base,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	title: {
		color: COLORS.white,
		...FONTS.body4,
	},
	imgWrapper: {
		position: 'absolute',
		top: '15%',
		left: 7,
	},
})
