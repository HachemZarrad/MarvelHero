import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useDispatch, useSelector } from 'react-redux'

import * as HeroesActions from '../../redux/actions/heroes'

import Input from '../../components/input'
import Title from '../../components/title'

const defaultHero = {
    "id": 1011334,
    "name": "3-D Man",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        "extension": "jpg"
    }
}

const FavoriteHero = ({ route }) => {

    const navigation = useNavigation()
    const hero = route?.params ? route?.params : defaultHero
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
            <Input item={hero} />
        </View>
    )
}

export default FavoriteHero

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginBottom: 100,
    },
    title: {
        alignSelf: 'center',
        paddingBottom: 20,
    }
})
