import jsonserver from '../apis/jsonserver'
import {
  FETCH_MUSCLES,
  FETCH_EXERCISES,
  FETCH_EXERCISES_BY_MUSCLES
} from './types'

export const fetchMuscles = () => async dispatch => {
  const response = await jsonserver.get('/muscles')
  dispatch({ type: FETCH_MUSCLES, payload: response.data })
}

export const fetchExercises = () => async dispatch => {
  const response = await jsonserver.get('/exercises')
  dispatch({ type: FETCH_EXERCISES, payload: response.data })
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
    // Get One muscels group
    let exercises = store.exercises.filter(e => e.muscles === muscles_group)
    exercises_by_muscles[muscles_group] = exercises
  }

  // const exercises_by_muscles = {}
  //
  // store.muscles.map(m => {
  //   let exercises = store.exercises.filter(e => e.muscles === m.name)
  //   exercises_by_muscles[m.name] = exercises
  //   return m.name
  // })

  dispatch({ type: FETCH_EXERCISES_BY_MUSCLES, payload: exercises_by_muscles })
}
