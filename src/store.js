import { persistStore, persistCombineReducers } from 'redux-persist'
import { createStore } from 'redux'
import storage from 'redux-persist/es/storage'

import reducers from './state'

const config = {
  key: 'root',
  storage
}

const reducer = persistCombineReducers(config, reducers)

const configureStore = () => {
  const store = createStore(reducer)
  const persistor = persistStore(store)

  return { store, persistor }
}

export default configureStore
