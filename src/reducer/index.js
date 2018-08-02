import { combineReducers } from 'redux'

import * as userReducer from './userReducer'

const rootReduser = combineReducers({
  ...userReducer,
})

export default rootReduser;