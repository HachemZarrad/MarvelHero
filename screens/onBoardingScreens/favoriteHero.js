import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useSelector } from 'react-redux'


import Input from '../../components/input'
import Title from '../../components/title'
import Paragraph from '../../components/paragraph'

import Colors from '../../constants/colors'


const FavoriteHero = () => {

    const hero = useSelector(state => state.heroes.favoriteHero)

    return (
        <View style={styles.container}>
            <Title title='Choose Your Marvel Hero' style={styles.title} />
            <Input item={hero} nextScreen='OnBoarding' />
        </View>
    )
}

export const FavoriteHeroScreen = {
    backgroundColor: Colors.background,
    image: <FavoriteHero />,
    title: <Title title='Are you Ready ?' />,
    subtitle: <Paragraph text='Let we jump to Marvel Fantasy.' />
}


const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    title: {
        alignSelf: 'center',
    }
})
