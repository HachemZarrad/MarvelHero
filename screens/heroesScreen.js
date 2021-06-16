import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import { useSelector } from 'react-redux'

import * as ActionTypes from '../redux/actions/actionsTypes'

import Colors from '../constants/colors'
import { Heroes } from '../constants/heroes'

import CustomList from '../components/customList'

const HeroesScreen = ({route}) => {

    // const heroes = useSelector(state => state.heroes.heroes)
    const nextScreen = route.params
    console.log('hs',nextScreen)

    return (
        <ImageBackground
            source={require('../assets/comic3.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <CustomList
                    data={Heroes}
                    action={ActionTypes.GET_HEROES}
                    nextScreen={nextScreen}
                />
            </View>
        </ImageBackground>
    )
}

export default HeroesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    background: {
        height: '100%',
        width: '100%',
    }
})
