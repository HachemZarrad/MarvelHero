import React from 'react'
import { StyleSheet, Image } from 'react-native'

const customImage = props => {
    return (
            <Image
                {...props}
                style={styles.image}
            />
    )
}

export default customImage

const styles = StyleSheet.create({
    image: {
        margin: 4,
        height: 180,
        width: 100
    }
})
