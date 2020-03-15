import { combineReducers } from 'redux'
import {
  DEFAULT_EXERCISE_DISPLAYED,
  FETCH_MUSCLES,
  FETCH_EXERCISES,
  FETCH_EXERCISES_BY_MUSCLES,
  DISPLAY_SELECTED_EXERCISE,
  EDIT_SELECTED_EXERCISE,
  DELETE_SELECTED_EXERCISE,
  CREATE_EXERCISE,
  DELETE_EXERCISE,
  EDIT_EXERCISE,
  OPEN_FORM_DIALOG,
  CLOSE_FORM_DIALOG
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
    case EDIT_EXERCISE:
      const trimmed_exercises = state.filter(e => e.id !== action.payload.id)
      return [...trimmed_exercises, action.payload]
    case DELETE_EXERCISE:
      return state.filter(exercise => exercise.id !== action.payload)
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

const EMPTY_EXERCISE = {
  id: DEFAULT_EXERCISE_DISPLAYED.id + 1,
  title: '',
  description: ''
}

const exerciseDisplayedReducer = (
  state = DEFAULT_EXERCISE_DISPLAYED,
  action
) => {
  switch (action.type) {
    case DISPLAY_SELECTED_EXERCISE:
      return action.payload
    case DELETE_SELECTED_EXERCISE:
      if (state.id === action.payload) {
        // payload is id
        return EMPTY_EXERCISE
      } else {
        return state
      }
    case EDIT_SELECTED_EXERCISE:
      if (state.id === action.payload.id) {
        return action.payload
      } else {
        return state
      }
    default:
      return state
  }
}

const DEFAULT_FORM_DIALOG = {
  open: false,
  title: '',
  exercise: null
}

const formDialogRedecer = (state = DEFAULT_FORM_DIALOG, action) => {
  switch (action.type) {
    case OPEN_FORM_DIALOG:
      const { title, exercise } = action.payload
      return {
        open: true,
        title,
        exercise
      }
    case CLOSE_FORM_DIALOG:
      return DEFAULT_FORM_DIALOG
    default:
      return state
  }
}

export default combineReducers({
  muscles: musclesReducer,
  exercises: exercisesReducer,
  exercises_by_muscles: exercisesByMusclesReducer,
  exercise_displayed: exerciseDisplayedReducer,
  form_dialog: formDialogRedecer
})
