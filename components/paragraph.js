import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        width: '100%',
        height: 80,
        alignItems: 'center',
    },
    text: {
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
})
