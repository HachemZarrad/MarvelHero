import * as ActionTypes from './actionsTypes'
import { baseUrl } from '../../constants/networking'

export const fetchComics = (heroId) => async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/v1/public/characters/${heroId}/comics?ts=${REACT_APP_TS}&apikey=${REACT_APP_KEY}&hash=${REACT_APP_HASH}`)
            if (!response.ok) throw new Error('Please Check Your Internet Connection')
            const comics = await response.json()
            dispatch({ type: ActionTypes.GET_COMICS, payload: comics.data.results })
            return comics.data.results
        }
        catch (error) {
            throw error
        }
}