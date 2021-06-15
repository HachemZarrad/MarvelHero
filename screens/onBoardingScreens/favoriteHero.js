import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useDispatch, useSelector } from 'react-redux'

import * as HeroesActions from '../../redux/actions/heroes'

import Input from '../../components/input'
import Title from '../../components/title'

const FavoriteHero = () => {

    const navigation = useNavigation()

    const reduxDispatch = useDispatch()
    // const heroes = useSelector(state => state.heroes.heroes)
    const [loading, setLoading] = useState(false)


    const pickUpHero = (heroId) => {
        reduxDispatch(HeroesActions.getFavoriteHero(heroId))
    }

    const goPickHero = () => {
        navigation.navigate('Heroes')
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
            <Button
                onPress={goPickHero}
                title="Learn More"
                color="#841584"
            />
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
