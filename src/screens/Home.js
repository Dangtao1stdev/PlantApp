import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AddedFriend from '../Component/Home/AddedFriend'
import NewPlant from '../Component/Home/NewPlant'
import TodayShare from '../Component/Home/TodayShare'
import { COLORS } from '../constants'
const Home = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			{/* New Plant */}
			<View style={styles.newPlant}>
				<NewPlant />
			</View>

			{/* Today's Share */}
			<View style={styles.todayShare}>
				<TodayShare />
			</View>

			{/* Added Friend */}
			<View style={styles.addFriend}>
				<AddedFriend />
			</View>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	newPlant: {
		flex: 3,
		backgroundColor: COLORS.white,
	},
	todayShare: {
		flex: 5,
		backgroundColor: COLORS.lightGray,
	},
	addFriend: { flex: 2, backgroundColor: COLORS.lightGray },
})
