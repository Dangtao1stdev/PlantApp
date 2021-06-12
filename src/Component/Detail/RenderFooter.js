import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { icons, SIZES, COLORS, FONTS } from '../../constants'
const RenderFooter = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.btnFooter}>
				<Text style={styles.txtFooter}>Take Action</Text>
				<Image
					source={icons.chevron}
					resizeMode="contain"
					style={{
						height: 30,
						width: 30,
						marginLeft: SIZES.padding,
					}}
				/>
			</TouchableOpacity>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Almost 2 weeks of growing time</Text>
                <Image
                    source={icons.downArrow}
                    resizeMode='contain'
                    style={{
                        tintColor: COLORS.secondary,
                        height: 20,
                        width: 20,
                        marginLeft:SIZES.base
                    }}
                />
            </View>
		</View>
	)
}

export default RenderFooter

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: SIZES.padding,
	},
    btnFooter: {
        flex:1,
		// width: '50%',
        flexDirection: 'row',
        paddingHorizontal:SIZES.padding,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopRightRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: COLORS.primary,
	},
	txtFooter: {
		color: COLORS.white,
		...FONTS.h2,
	},
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingHorizontal: SIZES.padding,
    },
    title: {
        flex: 1,
        color: COLORS.secondary,
        ...FONTS.h3
    }
})
