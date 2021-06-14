import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'

const Paragraph = props => {
    return (
        <View style={styles.container}>
            <Text {...props}
                numberOfLines={3}
                style={{ ...styles.text, ...props.style }}
            >{props.text}</Text>
        </View>
    )
}

export default Paragraph

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 80,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 17,
        color: 'white',
    }
})
