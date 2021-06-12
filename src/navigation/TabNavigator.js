import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, Image } from 'react-native'
import Home from '../screens/Home'
import { icons, COLORS } from '../constants'
import CameraButton from '../Component/Home/CameraButton'
const Tab = createBottomTabNavigator()
const tabBarOptions = {
	showLabel: false,
	style: { height: '10%' },
}
const TabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabBarOptions}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					const tintColor = focused ? COLORS.primary : COLORS.gray
					switch (route.name) {
						case 'Home':
							return (
								<Image
									source={icons.flash}
									resizeMode="contain"
									style={{
										height: 25,
										width: 25,
										tintColor: tintColor,
									}}
								/>
							)
						case 'Box':
							return (
								<Image
									source={icons.cube}
									resizeMode="contain"
									style={{
										height: 25,
										width: 25,
										tintColor: tintColor,
									}}
								/>
							)
						case 'Camera':
							return <CameraButton />
						case 'Search':
							return (
								<Image
									source={icons.search}
									resizeMode="contain"
									style={{
										height: 25,
										width: 25,
										tintColor: tintColor,
									}}
								/>
							)
						case 'Favorite':
							return (
								<Image
									source={icons.heart}
									resizeMode="contain"
									style={{
										height: 25,
										width: 25,
										tintColor: tintColor,
									}}
								/>
							)
					}
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Box" component={Home} />
			<Tab.Screen name="Camera" component={Home} />
			<Tab.Screen name="Search" component={Home} />
			<Tab.Screen name="Favorite" component={Home} />
		</Tab.Navigator>
	)
}

export default TabNavigator
