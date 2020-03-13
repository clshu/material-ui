import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

const RightPane = ({ styles }) => {
  const exercise = useSelector(state => state.exercise_displayed)
  return (
    <Paper style={styles}>
      <Typography variant="h4">{exercise.title}</Typography>
      <Typography variant="body1">{exercise.description}</Typography>
    </Paper>
  )
}

export default RightPane
