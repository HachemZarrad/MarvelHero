import React from 'react'
import { StyleSheet, Image } from 'react-native'

const MiddleImage = props => {
    return (
        <Image {...props} style={{...styles.image, ...props.style}} />
    )
}

export default MiddleImage

const styles = StyleSheet.create({
    image: {
        borderRadius: 20,
        height: 150,
        width: 240
    }
})
