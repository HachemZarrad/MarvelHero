import { combineReducers, applyMiddleware, createStore } from 'redux'
import Thunk from 'redux-thunk'

import comicsReducer from './reducers/comics'
import heroesReducer from './reducers/heroes'

const rootReducer = combineReducers({
    heroes: heroesReducer, 
    comics: comicsReducer
})

export const store = createStore(rootReducer, applyMiddleware(Thunk))