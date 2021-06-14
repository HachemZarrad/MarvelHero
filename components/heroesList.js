import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Accessory } from 'react-native-elements'

const HeroesList = props => {
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

export default HeroesList

const styles = StyleSheet.create({})
