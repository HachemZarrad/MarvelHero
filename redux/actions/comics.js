import * as ActionTypes from './actionsTypes'
import { baseUrl, apiKey, hash, ts } from '../../constants/networking'

export const fetchComics = (heroId) => async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/v1/public/characters/${heroId}/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`)
            if (!response.ok) throw new Error('Please Check Your Internet Connection')
            const comics = await response.json()
            dispatch({ type: ActionTypes.GET_COMICS, payload: comics.data.results })
            return comics.data.results
        }
        catch (error) {
            throw error
        }
}