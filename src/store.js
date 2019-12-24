import eventsReducers from './reducers/events'
import usersReducers from './reducers/users'
import { combineReducers, createStore } from 'redux'


const rootReducer = combineReducers({ events: eventsReducers, users: usersReducers })

export default createStore(rootReducer);
