import { combineReducers, applyMiddleware, createStore } from 'redux'
import Thunk from 'redux-thunk'

import comicsReducer from './reducers/comics'

const rootReducer = combineReducers({
    comics: comicsReducer
})

export const store = createStore(rootReducer, applyMiddleware(Thunk))