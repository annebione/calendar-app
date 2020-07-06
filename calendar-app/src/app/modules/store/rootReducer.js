import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import reminderReducer from './reminders/reminderReducer';

export default combineReducers({
  routing: routerReducer,
  reminder: reminderReducer
})