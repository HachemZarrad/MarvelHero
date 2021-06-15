import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Accessory } from 'react-native-elements'

import Colors from '../constants/colors'

const SelectionList = props => {
    return (
        <ScrollView  >
            <View style={styles.frame}>
                {props.list.map(item => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.item}
                        >
                            <Avatar
                                source={{
                                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                                }}
                            >
                                <Accessory />
                            </Avatar>
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default SelectionList

const styles = StyleSheet.create({
    frame: {
        borderWidth: 2,
        borderColor: Colors.frame,
        width: 280,
    },
    item: {
        flexDirection: 'row',
        marginBottom: 7,
        marginLeft: 5
    },
    name: {
        margin: 10,
        color: 'white',
    }
})
