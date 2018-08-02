import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducer'

// 创建store
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

// console.log(store.getState())
export default store;