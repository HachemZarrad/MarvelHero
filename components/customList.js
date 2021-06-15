import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import * as Actions from '../redux/actions/actionsTypes'

const displayAccordingToAction = ({ action, item }) => {
    switch (action) {
        case (Actions.GET_COMICS):
            return (
                <View style={{
                    flexDirection: 'row', height: 200, marginBottom: 10,
                    width: 344, borderRadius: 10
                }}>
                    <Image source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                        style={{ width: 120, height: 200, margin: 15 }} />
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30, marginRight: 180 }}>{item.title}</Text>
                        <Text style={{ fontSize: 17 }}>issue number: {item.issueNumber}</Text>
                        <Text style={{ fontSize: 17 }}>Price: ${item.prices[0].price}</Text>
                    </View>
                </View>
            )
        default:
            return (
                <View></View>
            )
    }
}

const CustomList = () => {

    return (
        <View style={{ flex: 1 }}>
            {props.data.length === 0 ? <View><Text>No Data Matches Your Filters</Text></View> :
                <FlatList
                    {...props}
                    keyExtractor={({ _id }) => _id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleItemClick(pressedElement, item)}>
                            <DisplayAccordingToService item={item} service={service} />
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    )
}

export default CustomList

const styles = StyleSheet.create({})
