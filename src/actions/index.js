import jsonserver from '../apis/jsonserver'
import {
  NO_OP,
  FETCH_MUSCLES,
  FETCH_EXERCISES,
  FETCH_EXERCISES_BY_MUSCLES,
  CREATE_EXERCISE,
  DELETE_EXERCISE,
  EDIT_EXERCISE,
  EDIT_SELECTED_EXERCISE,
  DELETE_SELECTED_EXERCISE
} from './types'

export const fetchMuscles = () => async dispatch => {
  const response = await jsonserver.get('/muscles')
  dispatch({ type: FETCH_MUSCLES, payload: response.data })
}

export const fetchExercises = () => async dispatch => {
  const response = await jsonserver.get('/exercises')
  dispatch({ type: FETCH_EXERCISES, payload: response.data })
}

export const createExercise = exercise => async dispatch => {
  const response = await jsonserver.post('/exercises', exercise)

  dispatch({ type: CREATE_EXERCISE, payload: response.data })
  dispatch(updateExercisesByMuscles())
}

export const editExercise = exercise => async dispatch => {
  const response = await jsonserver.patch(`/exercises/${exercise.id}`, exercise)
  dispatch({ type: EDIT_EXERCISE, payload: response.data })

  dispatch(updateExercisesByMuscles())
  dispatch({ type: EDIT_SELECTED_EXERCISE, payload: response.data })
}

export const deleteExercise = exercise => async dispatch => {
  await jsonserver.delete(`/exercises/${exercise.id}`)

  dispatch({ type: DELETE_EXERCISE, payload: exercise.id })
  dispatch(updateExercisesByMuscles())
  dispatch({ type: DELETE_SELECTED_EXERCISE, payload: exercise.id })
}

export const fetchExercisesByMuscles = muscles_group => (
  dispatch,
  getStore
) => {
  const store = getStore()

  let exercises_by_muscles = {}

  if (muscles_group === '') {
    // Get all muscles groups
    exercises_by_muscles = store.exercises.reduce(
      (exercises_by_group, exercise) => {
        const { muscles } = exercise
        exercises_by_group[muscles] = exercises_by_group[muscles]
          ? [...exercises_by_group[muscles], exercise]
          : [exercise]
        return exercises_by_group
      },
      {}
    )
  } else {
    // Get One muscles group
    let exercises = store.exercises.filter(e => e.muscles === muscles_group)
    exercises_by_muscles[muscles_group] = exercises
  }

  dispatch({ type: FETCH_EXERCISES_BY_MUSCLES, payload: exercises_by_muscles })
}

// Internal Funtion
const updateExercisesByMuscles = () => (dispatch, getStore) => {
  // Update store.exercises_by_muscles
  // This is called after addExercise or deleteExercise
  // is done. And the store.exercise is up to date.
  const exercises_by_muscles = getStore().exercises_by_muscles
  const keys = Object.keys(exercises_by_muscles)

  switch (keys.length) {
    case 0:
      // First Page loading. It should't be able to create
      // a new exercise. But just want to cover all code paths
      dispatch({ type: NO_OP })
      break
    case 1:
      // Single Muscle Group Existed
      dispatch(fetchExercisesByMuscles(keys[0]))
      break
    default:
      // All Muscles Groups Existed
      dispatch(fetchExercisesByMuscles(''))
  }
}
