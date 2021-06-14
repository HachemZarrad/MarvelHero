import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import OnBoardingBackground from '../../components/onBoardingBackground'
import Title from '../../components/title'
import Paragraph from '../../components/paragraph'

const Description = () => {
    return (
        <OnBoardingBackground>
            <View style={styles.container}>
                <Image source={require('../../assets/logoBack.png')} style={styles.image} />
                <Title title='Welcome to Marvel' />
                <Paragraph text='We bring Marvel Heaven to you. Just pick up your favorite hero and boom, amazing comics are right in your hand.'/>
            </View>
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
