import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tasks from './tasks'
import filter from './filter'

export default combineReducers({
  routing: routerReducer,
  filter,
  tasks
})
