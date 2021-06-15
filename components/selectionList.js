import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Accessory } from 'react-native-elements'

const SelectionList = props => {
    return (
        <ScrollView  >
            {props.list.map(item => {
                return (
                    <TouchableOpacity 
                        key={item.id}>
                        <View >
                            <Avatar
                                source={{
                                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                                }}
                            >
                                <Accessory />
                            </Avatar>
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default SelectionList 

const styles = StyleSheet.create({})
