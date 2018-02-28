/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {createEpicMiddleware} from 'redux-observable'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {Provider} from 'react-redux'

import Example from './components/Example'

import configureStore from './store'
import rootEpic from './effects'

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = configureStore()

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate persistor={store.persistor} >
            <Example />
        </PersistGate>
      </Provider>
    );
  }
}
