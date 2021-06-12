import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { images, COLORS, SIZES, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const TodayShare = () => {
    const navigation=useNavigation()
	return (
		<View style={styles.container}>
			<View style={styles.todayShareWrapper}>
				<View style={styles.headerTodayShare}>
					<Text style={styles.titleHeader}>Today's Share</Text>
					<TouchableOpacity >
						<Text style={styles.rightHeader}>See all</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.contentTodayShare}>
					<View style={styles.leftContent}>
						<TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Detail')}>
							<Image source={images.plant5} style={styles.imgOne} resizeMode="cover" />
						</TouchableOpacity>
						<TouchableOpacity
							style={{ flex: 1, marginTop: SIZES.font }}
							onPress={() => navigation.navigate('Detail')}
						>
							<Image source={images.plant6} style={styles.imgOne} resizeMode="cover" />
						</TouchableOpacity>
					</View>
					<View style={styles.rightContent}>
						<TouchableOpacity
							style={{ flex: 1, marginLeft: SIZES.font }}
							onPress={() => navigation.navigate('Detail')}
						>
							<Image source={images.plant7} style={styles.imgOne} resizeMode="cover" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

export default TodayShare

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
		backgroundColor: COLORS.white,
	},
	todayShareWrapper: {
		marginTop: SIZES.font,
		marginHorizontal: SIZES.padding,
	},
	headerTodayShare: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleHeader: {
		color: COLORS.secondary,
		...FONTS.h2,
	},
	rightHeader: {
		color: COLORS.secondary,
		...FONTS.body3,
	},
	contentTodayShare: {
		flexDirection: 'row',
		height: '88%',
		marginTop: SIZES.base,
	},
	leftContent: {
		flex: 1,
	},
	rightContent: {
		flex: 1,
	},
    imgOne: {
        
		height: '100%',
		width: '100%',
		borderRadius: 20,
	},
})
