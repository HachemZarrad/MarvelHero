import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/colors'

const Input = props => {
    return (
        <View style={styles.container}>
            <AntDesign
                name="search1"
                size={24}
                color="black"
                style={styles.icon} />
            <TextInput
                {...props}
                placeholderTextColor="black"
                style={{ ...styles.inputBar, ...props.style }}
            // value={inputValue}
            >
            </TextInput>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: Colors.frame,

    },
    inputBar: {
        margin: 10,
    },
    icon: {
        margin: 4,
    }
})
