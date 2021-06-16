import React from 'react'
import { StyleSheet, View } from 'react-native'

import Paragraph from '../../../components/paragraph'
import Title from '../../../components/title'
import Comic from '../../../components/comic'

import Colors from '../../../constants/colors'


const Comics = () => {
    return (
        <View style={styles.container}>
            <View style={styles.comics}>
                <Comic source={require('../../../assets/comic1.jpg')} />
                <Comic source={require('../../../assets/comic2.jpg')} />
                <Comic source={require('../../../assets/comic3.jpg')} />
            </View>
        </View>
    )
}


export const TransactionScreen1 = {
    backgroundColor: Colors.background,
    image: <Comics />,
    title: <Title title='We Blow Your Mind' style={{marginTop: -150}} />,
    subtitle: <Paragraph style={{marginTop: -100}} text='Enjoy hundreds of comics, posters, pictures and fascinating stories, All related to favorite hero.' />
}


const styles = StyleSheet.create({
    container: {
        height: '60%',
    },
    comics: {
        flexDirection: 'row',
        width: '85%',
        height: '100%'
    }
})
