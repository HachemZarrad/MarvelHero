import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ComicsScreen from '../screens/comicsScreen'
import OnBoardingScreen from '../screens/onBoardingScreen'
import HeroesScreen from '../screens/heroesScreen'


const navigationOptions = {
    headerShown: false
}


const comicsStackNavigator = createStackNavigator()

export const FullNavigator = () => {
    return(
        <comicsStackNavigator.Navigator screenOptions={navigationOptions}>
            <comicsStackNavigator.Screen name='OnBoarding' component={OnBoardingScreen}/>
            <comicsStackNavigator.Screen name='Comics' component={ComicsScreen}/>
            <comicsStackNavigator.Screen name='Heroes' component={HeroesScreen}/>
        </comicsStackNavigator.Navigator>
    )
}


export const ComicsNavigator = () => {
    return(
        <comicsStackNavigator.Navigator screenOptions={navigationOptions}>
            <comicsStackNavigator.Screen name='Comics' component={ComicsScreen}/>
            <comicsStackNavigator.Screen name='Heroes' component={HeroesScreen}/>
        </comicsStackNavigator.Navigator>
    )
}