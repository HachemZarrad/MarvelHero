import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { FullNavigator, ComicsNavigator } from './comicsNavigator';

import Colors from '../constants/colors'


export const FirstLaunchNavigator = () => {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.background}
                />
            </SafeAreaView>
            <FullNavigator />
        </NavigationContainer>
    )
}


export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.background}
                />
            </SafeAreaView>
            <ComicsNavigator />
        </NavigationContainer>
    )
}