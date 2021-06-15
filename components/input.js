import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Avatar, Accessory } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/colors'

import Title from './title';

const Input = props => {
    const navigation = useNavigation()

    const { item } = props

    const goPickHero = () => {
        navigation.navigate('Heroes')
    }

    return (
        <TouchableOpacity style={styles.container} onPress={goPickHero}>
            <View style={styles.hero}>
                <Avatar
                    source={{
                        uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    }}
                    size='small'

                >
                    <Accessory />
                </Avatar>
                <Title title={item.name} style={styles.heroName} />
            </View>
            <AntDesign
                name="caretdown"
                size={18}
                color={Colors.button}
                style={styles.icon}
            />
        </TouchableOpacity>
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
        margin: 10,
    },
    hero: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        flex: 1,
    },
    heroName: {
        color: 'black',
        fontSize: 15,
        margin: 15,
    }
})
