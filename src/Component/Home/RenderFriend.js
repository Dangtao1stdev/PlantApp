import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { friendList } from '../../constants/friendList'
import { COLORS, SIZES, FONTS } from '../../constants'
const RenderFriend = () => {
	if (friendList.length <= 3) {
		return friendList.map((item, index) => (
			<View key={index} style={{ marginLeft: index == 0 ? 0 : -20 }}>
				<Image source={item.img} resizeMode="cover" style={styles.image} />
			</View>
		))
	} else {
		return (
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {friendList.map((item, index) => {
                    
                        if (index <= 2) {
                            return(
                            <View key={index} style={{ marginLeft: index == 0 ? 0 : -20 }}>
                                <Image source={item.img} resizeMode="cover" style={styles.image} />
                                </View>
                            )
                        }
                    
                    
                })
                }
                <Text style={styles.txt}>+{friendList.length-3} More</Text>
			</View>
		)
	}
}
export default RenderFriend

const styles = StyleSheet.create({
	image: {
		height: 50,
		width: 50,
		borderRadius: 25,
		borderWidth: 3,
		borderColor: COLORS.primary,
    },
    txt: {
        marginLeft: 5,
        color: COLORS.secondary,
        ...FONTS.body3
    }
})
