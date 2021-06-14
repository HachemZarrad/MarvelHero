import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import OnBoardingBackground from '../../components/onBoardingBackground'
import Title from '../../components/title'

const Description = () => {
    return (
        <OnBoardingBackground>
            <View style={styles.container}>
                <Image source={require('../assets/logoBack.png')} style={styles.image} />
            </View>
            <Title title='Welcome to Marvel' />
        </OnBoardingBackground>
    )
}

export default Description

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        borderRadius: 20,
        height: 150,
        width: 240
    }
})
