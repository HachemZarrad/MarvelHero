import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { greaterThan } from 'react-native-reanimated'

import Input from '../../components/input'
import SelectionList from '../../components/selectionList'
import Title from '../../components/title'

const FavoriteHero = () => {
    return (
        <View style={styles.container}>
            <Title title='Choose Your Favorite Marvel Hero' />
            <Input placeholder='Pick Up Your Hero Here' />
        </View>
    )
}

export default FavoriteHero

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: 'red',
    }
})
