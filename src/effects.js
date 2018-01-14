import {combineEpics} from 'redux-observable'

import Example from './components/Example/effects'

export default combineEpics(
  Example,
)
