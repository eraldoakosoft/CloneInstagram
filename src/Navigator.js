import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'

const Tab = createBottomTabNavigator()

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Feed} />
                <Tab.Screen name="Settings" component={Feed} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
