import React, { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Provider } from 'react-redux'
import { store } from './redux/configureStore'

import { FirstLaunchNavigator, AppNavigator } from './navigation/appNavigator'


export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(true)

  useEffect(() => {
    AsyncStorage.getItem('@alreadyLaunched1').then(value => {
      if (value == null) {
        AsyncStorage.setItem('@alreadyLaunched1', 'true')
        setFirstLaunch(true)
      }
      else setFirstLaunch(false)
    })
  }, [])

  if (firstLaunch === null) return null

  else if (firstLaunch === true) return (
    <Provider store={store}>
      <FirstLaunchNavigator />
    </Provider>
  )

  else return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )

}

