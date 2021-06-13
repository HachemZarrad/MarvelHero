import React from 'react';

import { Provider } from 'react-redux'
import { store } from './redux/configureStore'

import { AppNavigator } from './navigation/appNavigator'


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}

