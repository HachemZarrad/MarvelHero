import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { Avatar, Accessory } from 'react-native-elements'

import * as Actions from '../redux/actions/actionsTypes'

import Comic from './comic'
import Title from './title'

const DisplayAccordingToAction = ({ action, item }) => {
    switch (action) {
        case (Actions.GET_HEROES):
            return (
                <View style={styles.heroFrame}>
                    <View style={styles.hero}>
                        <Avatar
                            source={{
                                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                            }}
                            size='medium'

                        >
                            <Accessory />
                        </Avatar>
                        <Title title={item.name} style={styles.heroName} />
                    </View>
                </View>

            )
        case (Actions.GET_COMICS):
            return (
                <View>
                    <Comic source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                    <View>
                        <Title title={item.title} />
                        <Text>issue number: {item.issueNumber}</Text>
                        <Text>Price: ${item.prices[0].price}</Text>
                    </View>
                </View>
            )
        default:
            return (
                <View></View>
            )
    }
}

const CustomList = props => {
    const { action, itemDetails } = props
    return (
        <View style={styles.list}>
            {props.data.length === 0 ? <View><Text>Please Check Your Internet Connection.</Text></View> :
                <FlatList
                    {...props}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <DisplayAccordingToAction item={item} action={action} />
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    )
}

export default CustomList

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    heroFrame: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.4
    },
    hero: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        flex: 1,
    },
    heroName: {
        fontSize: 16,
        marginLeft: 15,
    }
})
