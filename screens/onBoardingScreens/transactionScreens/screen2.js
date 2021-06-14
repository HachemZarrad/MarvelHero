import React from 'react'
import { StyleSheet } from 'react-native'

import Paragraph from '../../../components/paragraph'
import MiddleImage from '../../../components/middleImage'
import Title from '../../../components/title'



const Picture = () => {
    return (
        <MiddleImage
            source={require('../../../assets/blackSpider.jpg')}
            style={styles.image} />
    )
}

export const TransactionScreen2 = {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    image: <Picture/>,
    title: <Title title='Reasonable Prices At Our Stores' />,
    subtitle: <Paragraph text='Get deep into the world of your favorite heroes and their epic fights.' />

}

export default Picture

const styles = StyleSheet.create({
    image: {
        height: 220,
        width: 190
    },
})
