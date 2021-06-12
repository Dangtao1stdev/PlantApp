import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import { icons, COLORS, SIZES, FONTS } from '../../constants'
import { Data } from '../../constants/data'
import RenderItem from './RenderItem'
const NewPlant = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerNewPlant}>
				<Text style={styles.titleHeader}>New Plant</Text>
				<TouchableOpacity>
					<Image source={icons.focus} resizeMode="contain" style={{ height: 20, width: 20 }} />
				</TouchableOpacity>
			</View>
			<View style={{ marginTop: SIZES.base }}>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={Data}
					keyExtractor={(item) => item.id.toString()}
					renderItem={RenderItem}
				/>
			</View>
		</View>
	)
}

export default NewPlant

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: SIZES.padding * 2,
		paddingHorizontal: SIZES.padding,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		backgroundColor: COLORS.primary,
	},
	headerNewPlant: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleHeader: {
		color: COLORS.white,
		...FONTS.h2,
	},
})
