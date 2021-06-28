import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ImageBackground, ActivityIndicator } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import * as ActionTypes from '../redux/actions/actionsTypes'

import Colors from '../constants/colors'

import CustomList from '../components/customList'
import * as HeroesActions from '../redux/actions/heroes'

const HeroesScreen = ({ route }) => {

    const heroes = useSelector(state => state.heroes.heroes)
    const nextScreen = route.params
    const reduxDispatch = useDispatch()

    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        reduxDispatch(HeroesActions.fetchHeroes()).then(() => {
            setLoading(false)
        })
    }, [reduxDispatch])


    return (
        <ImageBackground
            source={require('../assets/comic3.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                {loading ? <ActivityIndicator size='large' color='gold' /> :
                    <CustomList
                        data={heroes}
                        action={ActionTypes.GET_HEROES}
                        nextScreen={nextScreen}
                    />
                }
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
