import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const OnBoardingBackground = props => {
    return (
        <View style={styles.container}>
            <Image style={{ ...styles.image, ...props.style }}
                source={require('../assets/blackSpider.jpg')} />
        </View>
    )
}

export default OnBoardingBackground

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
