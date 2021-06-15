import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import * as ActionTypes from '../redux/actions/actionsTypes'

import Colors from '../constants/colors'
import { Heroes } from '../constants/heroes'

import CustomList from '../components/customList'

const HeroesScreen = () => {
    const navigation = useNavigation()
    // const heroes = useSelector(state => state.heroes.heroes)

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <CustomList data={Heroes} action={ActionTypes.GET_HEROES} />
        </View>
    )
}

export default HeroesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    }
})
