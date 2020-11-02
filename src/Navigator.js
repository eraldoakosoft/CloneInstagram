import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Feed}
                    options={{
                        tabBarIcon: ({ tintColor }) =>
                            <Icon name='home' size={30} color={tintColor} />
                    }}
                />
                <Tab.Screen
                    name="Camera"
                    component={AddPhoto}
                    options={{
                        tabBarIcon: ({ tintColor }) =>
                            <Icon name='camera' size={30} color={tintColor} />
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ tintColor }) =>
                            <Icon name='user' size={30} color={tintColor} />
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
