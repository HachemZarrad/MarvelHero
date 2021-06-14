import React from 'react'
import { StyleSheet, View } from 'react-native'

import Paragraph from '../../../components/paragraph'
import CustomImage from '../../../components/customImage'


const Screen1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.comics}>
                <CustomImage source={require('../../../assets/comic1.jpg')} />
                <CustomImage source={require('../../../assets/comic2.jpg')} />
                <CustomImage source={require('../../../assets/comic3.jpg')} />
            </View>
            <Paragraph text='Enjoy hundreds of comics, posters, pictures and fascinating stories' />
        </View>

    )
}

export default Screen1

const styles = StyleSheet.create({
    container: {

    },
    comics: {
        flexDirection: 'row'
    }
})
