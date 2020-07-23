// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic';
import { routerMiddleware } from 'react-router-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './rootReducer'
import logic from './rootLogic';



export const history = createHistory()

// Initial Middleware dependencies
const deps = {};

// Redux Persist Module Config
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const logicMiddleware = createLogicMiddleware(logic, deps);

// Initial Redux store state
const initialState = {}

// Middleware tools
const enhancers = []

const middleware = [
  thunk,
  //logicMiddleware,
  routerMiddleware(history)
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  persistedReducer,
  initialState,
  composedEnhancers
)

const persistor = persistStore(store)

export { store, persistor };