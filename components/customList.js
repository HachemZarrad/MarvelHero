import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { Avatar, Accessory } from 'react-native-elements'

import * as ActionsTypes from '../redux/actions/actionsTypes'
import * as HeroesActions from '../redux/actions/heroes'

import Comic from './comic'
import Title from './title'

import Colors from '../constants/colors'


const DisplayAccordingToAction = ({ action, item, pickUpHero }) => {
    switch (action) {
        case (ActionsTypes.GET_HEROES):
            return (
                <TouchableOpacity style={styles.heroFrame} onPress={() => pickUpHero(item)}>
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
                </TouchableOpacity>

            )
        case (ActionsTypes.GET_COMICS):
            return (
                <View style={styles.comicFrame}>
                    <Comic source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                    <View style={styles.comicDetails}>
                        <Title title={item.title} style={styles.comicTitle} />
                        <Text style={styles.priceIssueNumber}>issue number: {item.issueNumber}</Text>
                        <Text style={styles.priceIssueNumber}>Price: ${item.prices[0].price}</Text>
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

    const navigation = useNavigation()
    const reduxDispatch = useDispatch()

    const { action, nextScreen } = props

    const pickUpHero = (hero) => {
        reduxDispatch(HeroesActions.getFavoriteHero(hero))
        navigation.navigate(nextScreen)
    }


    return (
        <View style={styles.list}>
            {props.data.length === 0 ? <View><Text>Please Check Your Internet Connection.</Text></View> :
                <FlatList
                    {...props}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                        <DisplayAccordingToAction
                            item={item}
                            action={action}
                            pickUpHero={pickUpHero}
                        />
                    )}
                />
            }
        </View>
    )
}

export default CustomList

const styles = StyleSheet.create({
    list: {
        width: '100%'
    },
    heroFrame: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 0.8
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
    },
    comicFrame: {
        flexDirection: 'row',
        height: 200,
        backgroundColor: Colors.accent,
        margin: 5,
        width: '96%',
        borderRadius: 10,
        flex: 1,
        overflow: 'hidden',
    },
    comicDetails: {
        margin: 10,
        justifyContent: 'center'
    },
    priceIssueNumber: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    comicTitle: {
        marginBottom: 30,
        marginRight: 140,
        fontSize: 20,
    }
})
