import React, { Fragment } from 'react'
import { Header, Footer } from './Layout'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMuscles, fetchExercises } from '../actions'
import Exercises from './Exercises'

const App = () => {
  const muscles = useSelector(state => state.muscles.map(m => m.name))
  const exercises = useSelector(state => state.exercises)
  const dispatch = useDispatch()

  // Similar to componentDidMount
  // Only run once with [] as 2nd paramter
  useEffect(() => {
    dispatch(fetchMuscles())
  }, [])

  useEffect(() => {
    dispatch(fetchExercises())
  }, [])

  return (
    <Fragment>
      <Header />
      <Exercises />
      <Footer />
    </Fragment>
  )
}

export default App
