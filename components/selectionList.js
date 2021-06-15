import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Accessory } from 'react-native-elements'

const SelectionList = props => {
    return (
        <ScrollView  >
            {props.filteredHeroes.map(hero => {
                return (
                    <TouchableOpacity 
                        key={hero.id}>
                        <View >
                            <Avatar
                                source={{
                                    uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
                                }}
                            >
                                <Accessory />
                            </Avatar>
                            <View>
                                <Text>{hero.name}</Text>
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
