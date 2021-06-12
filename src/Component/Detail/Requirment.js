import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { icons, SIZES, COLORS, FONTS } from '../../constants'
import RenderRequirmentBar from './RenderRequirmentBar'
import RequirmentDetail from './RequirmentDetail'
const Requirment = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Requirments</Text>
			<RenderRequirmentBar />
			<View style={styles.content}>
				<RequirmentDetail icon={icons.sun} label="Sunlight" detail="15°C" />
				<RequirmentDetail icon={icons.drop} label="Water" detail="250 ML Daily" />
				<RequirmentDetail icon={icons.temperature} label="Room Temp" detail="25°C" />
				<RequirmentDetail icon={icons.garden} label="Soil" detail="3 Kg" />
				<RequirmentDetail icon={icons.seed} label="Fertilizer" detail="150 Mg" />
			</View>
		</View>
	)
}

export default Requirment

const styles = StyleSheet.create({
    container: {
        flex:1
    },
	text: {
		paddingHorizontal: SIZES.padding,
		color: COLORS.secondary,
		...FONTS.h1,
	},
	content: {
		flex: 2.5,
		marginTop: SIZES.padding,
		paddingHorizontal: SIZES.padding,
		justifyContent: 'space-around',
	},
})
