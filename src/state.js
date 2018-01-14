// @flow
// import {combineReducers, type Reducer} from 'redux'
import {persistCombineReducers} from 'redux-persist'
import example from './components/Example/state'

import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

const config = {
  key: 'root',
  storage,
  whitelist: [
    'example',
  ],
}

export default () => persistCombineReducers(config, {
  example
})
