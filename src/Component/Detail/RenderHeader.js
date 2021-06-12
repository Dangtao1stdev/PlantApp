import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const RenderHeader = () => {
    const navigation=useNavigation()
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.btn}>
					<Image source={icons.back} resizeMode="contain" style={{ height: 20, width: 20 }} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default RenderHeader

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	btn: {
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: 'rgba(255,255,225,0.5)',
	},
})
