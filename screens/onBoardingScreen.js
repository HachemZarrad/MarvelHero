import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Onboarding from 'react-native-onboarding-swiper'

import { Description } from './onBoardingScreens/description'
import { TransactionScreen1 } from './onBoardingScreens/transactionScreens/screen1'
import { TransactionScreen2 } from './onBoardingScreens/transactionScreens/screen2'
import { FavoriteHeroScreen } from './onBoardingScreens/favoriteHero'

import Colors from '../constants/colors'



const OnBoardingScreen = () => {

    const navigation = useNavigation()
    const goToComics = () => { navigation.navigate('Comics') }

    return (
        <ImageBackground
            source={require('../assets/blackSpider.jpg')}
            style={styles.background}
        >
            <Onboarding
                onDone={goToComics}
                onSkip={goToComics}
                pages={[
                    Description,
                    TransactionScreen1,
                    TransactionScreen2,
                    FavoriteHeroScreen,
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
