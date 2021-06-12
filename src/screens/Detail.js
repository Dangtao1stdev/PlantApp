import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import RenderFooter from '../Component/Detail/RenderFooter'
import RenderHeader from '../Component/Detail/RenderHeader'
import Requirment from '../Component/Detail/Requirment'
import { images, COLORS, SIZES } from '../constants'
const Detail = () => {
	return (
		<View style={styles.container}>
			{/* Banner Photo */}
			<View style={{ height: '35%' }}>
				<Image source={images.bannerBg} resizeMode="cover" style={{ height: '100%', width: '100%' }} />
			</View>
			{/* Requirments */}
			<View style={styles.content}>
				<Requirment />
			</View>
			<View style={styles.footer}>
				<RenderFooter />
			</View>
            <View style={styles.renderHeader}>
                <RenderHeader/>
            </View>
		</View>
	)
}

export default Detail

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		backgroundColor: COLORS.lightGray,
		marginTop: -40,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		paddingVertical: SIZES.padding,
	},
	footer: {
		height: '20%',
	},
	renderHeader: {
		position: 'absolute',
		top: 50,
		left: SIZES.padding,
		right: SIZES.padding,
	},
})
