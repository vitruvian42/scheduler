import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, createLogger())

const persistedState = localStorage.getItem('todoReduxState') ? JSON.parse(localStorage.getItem('todoReduxState')) : {}

export default createStore(reducer,persistedState, middleware)
