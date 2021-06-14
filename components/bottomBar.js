import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BottomBar = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
