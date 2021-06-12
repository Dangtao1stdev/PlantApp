import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {icons,SIZES,COLORS,FONTS} from '../../constants'
import RequirmentBar from './RequirmentBar'
const RenderRequirmentBar = () => {
    return (
        <View style={styles.container}>
            <RequirmentBar
                icon={icons.sun}
                barPercentage='50%'
            />
            <RequirmentBar
                icon={icons.drop}
                barPercentage='25%'
            />
            <RequirmentBar
                icon={icons.temperature}
                barPercentage='80%'
            />
            <RequirmentBar
                icon={icons.garden}
                barPercentage='30%'
            />
            <RequirmentBar
                icon={icons.seed}
                barPercentage='50%'
            />
            
        </View>
    )
}

export default RenderRequirmentBar

const styles = StyleSheet.create({
    container: {
        flexDirection:'row'
        , marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent:'space-between'

    }
})
