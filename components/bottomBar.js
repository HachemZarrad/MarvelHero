import React from 'react'
import { StyleSheet, View } from 'react-native'
import Dots from 'react-native-dots-pagination';

import { MaterialIcons } from '@expo/vector-icons';

import Button from './button'


const BottomBar = props => {
    return (
        <View style={styles.container}>
            <Button title='Skip' />
            <Dots length={5} active={props.active} />
            {props.active === 5 ? <MaterialIcons name="done" size={24} color="white" /> :
                <Button title='Next' />
            }
        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'red'
    }
})
