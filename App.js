import React, { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Provider } from 'react-redux'
import { store } from './redux/configureStore'

import { FirstLaunchNavigator, AppNavigator } from './navigation/appNavigator'


export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setFirstLaunch(true)
      }
      else setFirstLaunch(false)
    })
  }, [])

  if (firstLaunch === null) return null

  if (firstLaunch) return (
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

