import React from 'react'
import { StyleSheet, View } from 'react-native'

import Paragraph from '../../../components/paragraph'
import Title from '../../../components/title'
import CustomImage from '../../../components/customImage'


const Comics = () => {
    return (
        <View style={styles.comics}>
            <CustomImage source={require('../../../assets/comic1.jpg')} />
            <CustomImage source={require('../../../assets/comic2.jpg')} />
            <CustomImage source={require('../../../assets/comic3.jpg')} />
        </View>
    )
}

export default Comics

export const TransactionScreen1 = {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    image: <Comics />,
    title: <Title title='We Blow Your Mind' />,
    subtitle: <Paragraph text='Enjoy hundreds of comics, posters, pictures and fascinating stories, All related to favorite hero.' />
}


const styles = StyleSheet.create({
    comics: {
        flexDirection: 'row'
    }
})
