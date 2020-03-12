import { combineReducers } from 'redux'
import { FETCH_MUSCLES, FETCH_EXERCISES } from '../actions/types'

const musclesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MUSCLES:
      return action.payload
    default:
      return state
  }
}

const exercisesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_EXERCISES:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  muscles: musclesReducer,
  exercises: exercisesReducer
})
