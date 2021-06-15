import * as ActionTypes from '../actions/actionsTypes'


const initialState = {
    heroes: [],
    favoriteHero: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_HEROES):
            return { ...state, heroes: action.payload }
        case (ActionTypes.GET_FAV_HERO):
            return { ...state, favoriteHero: action.payload }

        default:
            return state;
    }
}