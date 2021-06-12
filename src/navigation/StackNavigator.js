import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from '../screens/Detail'
import TabNavigator from './TabNavigator'
const Stack = createStackNavigator()
const StackNavigator = () => {
	return (
		<Stack.Navigator headerMode="none" initialRouteName="Tab">
			<Stack.Screen name="Tab" component={TabNavigator} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	)
}

export default StackNavigator
