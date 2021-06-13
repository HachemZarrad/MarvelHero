import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ComicsScreen from '../screens/comicsScreen'
import OnBoardingScreen from '../screens/onBoardingScreen'


const comicsStackNavigator = createStackNavigator()

export const comicsNavigator = () => {
    return(
        <comicsStackNavigator.Navigator>
            <comicsStackNavigator.Screen name='OnBoarding' component={OnBoardingScreen}/>
            <comicsStackNavigator.Screen name='Comics' component={ComicsScreen}/>
        </comicsStackNavigator.Navigator>
    )
}