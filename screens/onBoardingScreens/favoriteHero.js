import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useDispatch, useSelector } from 'react-redux'

import * as HeroesActions from '../../redux/actions/heroes'

import Input from '../../components/input'
import SelectionList from '../../components/selectionList'
import Title from '../../components/title'
import { Heroes } from '../../constants/heroes'

const FavoriteHero = () => {

    const navigation = useNavigation()

    const reduxDispatch = useDispatch()
    // const heroes = useSelector(state => state.heroes.heroes)
    const [loading, setLoading] = useState(false)


    const pickUpHero = (heroId) => {
        reduxDispatch(HeroesActions.getFavoriteHero(heroId))
    }

    // useEffect(() => {
    //     setLoading(true)
    //     reduxDispatch(HeroesActions.fetchHeroes()).then(() => {
    //         setLoading(false)
    //     })
    // }, [reduxDispatch])


    return (
        <View style={styles.container}>
            <Title title='Choose Your Marvel Hero' style={styles.title} />
            <Input placeholder='Search Here' />
            {loading ? <ActivityIndicator size="large" color='gold' /> :
                <SelectionList list={Heroes} />
            }
        </View>
    )
}

export default FavoriteHero

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginBottom: 200,
    },
    title: {
        alignSelf: 'center',
        paddingBottom: 20,
    }
})
