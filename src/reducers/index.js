import { combineReducers } from 'redux'
import {
  FETCH_MUSCLES,
  FETCH_EXERCISES,
  FETCH_EXERCISES_BY_MUSCLES,
  DISPLAY_EXERCISE,
  CREATE_EXERCISE
} from '../actions/types'

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
    case CREATE_EXERCISE:
      return [...state, action.payload]
    default:
      return state
  }
}

const exercisesByMusclesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXERCISES_BY_MUSCLES:
      return action.payload
    default:
      return state
  }
}

const DEFAULT_EXERCISE_DISPLAYED = {
  title: 'Welcome!',
  description:
    'Click a muscle group on the bottom first. Then select an excercise from the list on the left.'
}
const exerciseDisplayedReducer = (
  state = DEFAULT_EXERCISE_DISPLAYED,
  action
) => {
  switch (action.type) {
    case DISPLAY_EXERCISE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  muscles: musclesReducer,
  exercises: exercisesReducer,
  exercises_by_muscles: exercisesByMusclesReducer,
  exercise_displayed: exerciseDisplayedReducer
})
