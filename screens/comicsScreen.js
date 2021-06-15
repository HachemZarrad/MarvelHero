import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import * as ActionTypes from '../redux/actions/actionsTypes'
import { fetchComics } from '../redux/actions/comics'

import Input from '../components/input'
import CustomList from '../components/customList'

const ComicsScreen = () => {

    const reduxDispatch = useDispatch()
    const hero = useSelector(state => state.heroes.favoriteHero)
    const comics = useSelector(state => state.comics.comics)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        reduxDispatch(fetchComics().then(() => {
            setLoading(false)
        }))
    }, [reduxDispatch])


    return (
        <View>
            <Input item={hero} />
            {loading ? <ActivityIndicator size='large' color='gold' /> :
                <CustomList
                    data={comics}
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

    }
})
