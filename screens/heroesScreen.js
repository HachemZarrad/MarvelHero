import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'
import * as ActionTypes from '../redux/actions/actionsTypes'

import Colors from '../constants/colors'
import { Heroes } from '../constants/heroes'

const HeroesScreen = () => {
    // const heroes = useSelector(state => state.heroes.heroes)
    return (
        <View style={styles.container}>
            <CustomList data={Heroes} service={ActionTypes.GET_HEROES} />
        </View>
    )
}

export default HeroesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStartColor: Colors.background
    }
})
