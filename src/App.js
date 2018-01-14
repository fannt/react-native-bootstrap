/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {applyMiddleware, createStore} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {Provider} from 'react-redux'

import Example from './components/Example'

import reducers from './state'
import rootEpic from './effects'

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
)

const persistor = persistStore(store, null, () => {
  store.getState() // if you want to get restoredState
})

export default class App extends Component<{}> {
  render() {

    // console.warn(reducers)

    return (
      <Provider store={store} >
        <Example />
      </Provider>
      // <PersistGate persistor={persistor} >
      //   <Example />
      // </PersistGate>
    );
  }
}
