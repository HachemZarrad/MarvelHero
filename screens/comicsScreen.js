import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, BackHandler, Alert} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { useSelector, useDispatch } from 'react-redux'
import * as ActionTypes from '../redux/actions/actionsTypes'
import { fetchComics } from '../redux/actions/comics'

import Input from '../components/input'
import CustomList from '../components/customList'

import { Comics } from '../constants/comics'

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
        <View style={styles.container}>
            <Input item={hero} />
            {loading ? <ActivityIndicator size='large' color='gold' style={styles.spinner} /> :
                <CustomList
                    data={Comics}
                    nextScreen='Comics'
                    action={ActionTypes.GET_COMICS}
                />
            }
        </View>
    )
}

export default ComicsScreen

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
    },
    spinner: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
