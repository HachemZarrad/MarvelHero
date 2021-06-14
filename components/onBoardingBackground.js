import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

const OnBoardingBackground = props => {
    return (
        <ImageBackground
            source={require('../assets/blackSpider.jpg')}
            style={{ ...styles.image, ...props.style }}
        >
        </ImageBackground>
    )
}

export default OnBoardingBackground

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    }
})
