import React, { Fragment } from 'react'
import { Header, Footer } from './Layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMuscles, fetchExercises } from '../actions'
import Exercises from './Exercises'

const App = () => {
  const dispatch = useDispatch()

  // Similar to componentDidMount
  // Only run once with [dispatch] as 2nd paramter
  // [] also works but with warnings, linter suggested
  // to use dispatch
  useEffect(() => {
    dispatch(fetchMuscles())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchExercises())
  }, [dispatch])

  return (
    <Fragment>
      <Header />
      <Exercises />
      <Footer />
    </Fragment>
  )
}

export default App
