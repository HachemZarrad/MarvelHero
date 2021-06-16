import React from 'react'
import { StyleSheet, Image } from 'react-native'

const Comic = props => {
    return (
            <Image
                {...props}
                style={styles.image}
            />
    )
}

export default Comic 

const styles = StyleSheet.create({
    image: {
        margin: 4,
        height: '96%',
        width: '35%', 
    }
})
