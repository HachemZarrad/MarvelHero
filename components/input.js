import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const input = () => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <TextInput
                {...props}
                placeholderTextColor="black"
                style={{ ...styles.inputBar, ...props.style }}
                value={inputValue}
            >
            </TextInput>
        </View>
    )
}

export default input

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        margin: 5,
        borderColor: 'red',

    },
    inputBar: {
        flex: 1
    },
})
