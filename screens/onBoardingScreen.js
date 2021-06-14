import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
                <Text>First page</Text>
            </View>
            <View key="2">
                <Text>Second page</Text>
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
