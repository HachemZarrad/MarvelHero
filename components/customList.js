import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import * as Actions from '../redux/actions/actionsTypes'

import Comic from './comic'
import Title from './title'

const displayAccordingToAction = ({ action, item }) => {
    switch (action) {
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
    return (
        <View style={{ flex: 1 }}>
            {props.data.length === 0 ? <View><Text>Please Check Your Internet Connection.</Text></View> :
                <FlatList
                    {...props}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                        <DisplayAccordingToAction item={item} action={action} />
                    )}
                />
            }
        </View>
    )
}

export default CustomList

const styles = StyleSheet.create({})
