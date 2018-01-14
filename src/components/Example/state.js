import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'
import {REHYDRATE} from 'redux-persist'

export const types = {
}

export const actions = mapValues(types, type => createAction(type))

const initialState = {
  data: [
    {
      title: 'Main title 1',
      data: [{text: '1', key: 1}, {text: '2', key: 2}]
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
        return state
    default:
      return state
  }
}
