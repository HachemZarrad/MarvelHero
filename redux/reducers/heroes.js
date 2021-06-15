import * as ActionTypes from '../actions/actionsTypes'

const defaultHero = {
    "id": 1011334,
    "name": "3-D Man",
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        "extension": "jpg"
    }
}

const initialState = {
    heroes: [],
    favoriteHero: defaultHero,
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