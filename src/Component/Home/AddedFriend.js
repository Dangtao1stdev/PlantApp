import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {icons,COLORS,SIZES,FONTS} from '../../constants'
import RenderFriend from './RenderFriend'
const AddedFriend = () => {
    return (
		<View style={styles.container}>
			<View style={styles.txt}>
				<Text style={styles.txt1}>Added Friend</Text>
				<Text style={styles.txt2}>5 Total</Text>
				<View style={{ flexDirection: 'row', height: '60%' }}>
					<View style={styles.friend}>
						<RenderFriend />
					</View>
					<View style={styles.addFriend}>
                        <Text style={styles.titleAdd}>Add New</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Image source={icons.plus} resizeMode='contain' style={{height:20,width:20}}/>
                        </TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

export default AddedFriend

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.lightGray,
	},
	txt: {
		marginTop: SIZES.radius,
		marginHorizontal: SIZES.padding,
	},
	txt1: {
		color: COLORS.secondary,
		...FONTS.h2,
	},
	txt2: {
		color: COLORS.secondary,
		...FONTS.body3,
	},
	friend: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	addFriend: {
		flex: 1,
		flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    btn: {
        marginLeft: SIZES.base,
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent:'center'
        ,alignItems:'center'
        ,backgroundColor:COLORS.gray
    },
    titleAdd: {
        color: COLORS.secondary,
        ...FONTS.body3
    }
})
