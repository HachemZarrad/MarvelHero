import * as ActionTypes from './actionsTypes'
import { baseUrl, apiKey, hash, ts } from '../../constants/networking'

export const fetchHeroes = () => async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`)
            if (!response.ok) throw new Error('Please Check Your Internet Connection')
            const heroes = await response.json()
            dispatch({ type: ActionTypes.GET_HEROES ,payload: heroes })
        }
        catch (error) {
            throw error
        }
}