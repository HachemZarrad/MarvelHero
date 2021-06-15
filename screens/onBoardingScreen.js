import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

import { TransactionScreen1 } from './onBoardingScreens/transactionScreens/screen1'
import { TransactionScreen2 } from './onBoardingScreens/transactionScreens/screen2'

import { Description } from './onBoardingScreens/description'
import NearbyStores from './onBoardingScreens/nearbyStores'
import FavoriteHero from './onBoardingScreens/favoriteHero'

import Colors from '../constants/colors'



const OnBoardingScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/blackSpider.jpg')}
            style={styles.background}
        >
            <Onboarding
                pages={[
                    Description,
                    TransactionScreen1,
                    TransactionScreen2,
                    {
                        backgroundColor: '#fff',
                        image: <NearbyStores />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: Colors.background,
                        image: <FavoriteHero />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </ImageBackground>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.background,
    }
})
