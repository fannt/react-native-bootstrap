import {connect} from 'react-redux'

import Component from './Example'
import {actions} from './state'

const mapStateToProps = ({example}) => ({
  ...example,
  test: "test"
})

export default connect(mapStateToProps, actions)(Component)
