import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = props => {
    return (
        <TouchableOpacity 
            {...props} 
            style={{...styles.button, ...props.style}}
        >
            <Text style={styles.textButton}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    textButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    button: {
        width: '20%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
