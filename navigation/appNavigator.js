import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { ComicsNavigator } from './comicsNavigator';

import Colors from '../constants/colors'


export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.statusBar}
                />
            </SafeAreaView>
            <ComicsNavigator />
        </NavigationContainer>
    )
}