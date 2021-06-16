import React from 'react'

import Title from '../../components/title'
import Paragraph from '../../components/paragraph'
import MiddleImage from '../../components/middleImage'

import Colors from '../../constants/colors'



export const Description = {
    backgroundColor: Colors.background,
    image: <MiddleImage source={require('../../assets/logoBack.png')} />,
    title: <Title title='Welcome to Marvel' />,
    subtitle: <Paragraph text='We bring Marvel Heaven to you. Just pick up your favorite hero and boom, amazing comics are right in your hand.' />
}





