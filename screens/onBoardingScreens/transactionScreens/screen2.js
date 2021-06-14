import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Paragraph from '../../../components/paragraph'


const Screen2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageFrame}>
                <Image
                    source={require('../../../assets/blackSpider.jpg')}
                    style={styles.image} />
            </View>
            <Paragraph text='Get deep into the world of your favorite heroes and their epic fights.'/>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    container: {

    },
    image: {
        borderRadius: 20,
        height: 220,
        width: 190
    },
    imageFrame: {
        
    }
})
