import * as ActionTypes from '../actions/actionsTypes'


const initialState = {
    comics: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.GET_COMICS):
            return { ...state, comics: payload }
        default:
            return initialState
    }
}