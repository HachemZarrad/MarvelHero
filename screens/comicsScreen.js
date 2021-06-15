import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, BackHandler, Alert, ImageBackground, Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { useSelector, useDispatch } from 'react-redux'
import * as ActionTypes from '../redux/actions/actionsTypes'
import { fetchComics } from '../redux/actions/comics'

import Input from '../components/input'
import CustomList from '../components/customList'

import { Comics } from '../constants/comics'
import Colors from '../constants/colors'


const ComicsScreen = () => {

    const navigation = useNavigation()
    const reduxDispatch = useDispatch()
    const hero = useSelector(state => state.heroes.favoriteHero)
    // const comics = useSelector(state => state.comics.comics)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const backAction = () => {
            if (navigation.isFocused()) Alert.alert("That's All !", "Exit App?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            if (navigation.isFocused()) return true
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    // useEffect(() => {
    //     setLoading(true)
    //     reduxDispatch(fetchComics(hero.id)).then(() => {
    //         setLoading(false)
    //     })
    // }, [reduxDispatch])


    return (
        <ImageBackground source={require('../assets/dark3.png')} style={styles.background}>
            <View style={styles.container}>
                <Input item={hero} style={styles.input} />
                {loading ? <ActivityIndicator size='large' color='gold' style={styles.spinner} /> :
                    <CustomList
                        data={Comics}
                        nextScreen='Comics'
                        action={ActionTypes.GET_COMICS}
                    />
                }
            </View>
        </ImageBackground>
    )
}

export default ComicsScreen

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        padding: 8,
        marginTop: Platform.OS === 'ios' ? 30 : 0 ,
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    spinner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
    }
})
