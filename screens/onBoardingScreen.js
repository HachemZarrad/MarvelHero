import React from 'react'
import { StyleSheet, View } from 'react-native'
import PagerView from 'react-native-pager-view'

import TransactionScreen1 from './onBoardingScreens/transactionScreens/screen1'
import TransactionScreen2 from './onBoardingScreens/transactionScreens/screen2'

import Description from './onBoardingScreens/description'
import NearbyStores from './onBoardingScreens/nearbyStores'
import FavoriteHero from './onBoardingScreens/favoriteHero'


const OnBoardingScreen = () => {
    return (
        <PagerView style={styles.pagerView} initialPage={0}>
            <View key="1">
                <Description />
            </View>
            <View key="2">
                <TransactionScreen1 />
            </View>
            <View key="3">
                <TransactionScreen2 />
            </View>
            <View key="4">
                <NearbyStores />
            </View>
            <View key="5">
                <FavoriteHero />
            </View>
        </PagerView>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    }
})
