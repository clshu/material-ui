import jsonserver from '../apis/jsonserver'
import { FETCH_MUSCLES, FETCH_EXERCISES } from './types'

export const fetchMuscles = () => async dispatch => {
  const response = await jsonserver.get('/muscles')
  dispatch({ type: FETCH_MUSCLES, payload: response.data })
}

export const fetchExercises = () => async dispatch => {
  const response = await jsonserver.get('/exercises')
  dispatch({ type: FETCH_EXERCISES, payload: response.data })
}
