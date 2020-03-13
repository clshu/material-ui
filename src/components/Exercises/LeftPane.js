import React, { Fragment } from 'react'
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { DISPLAY_EXERCISE } from '../../actions/types'

const LeftPane = ({ styles }) => {
  const exercises_by_muscles = useSelector(state => state.exercises_by_muscles)
  const dispatch = useDispatch()

  const handleListItemClick = (index, exercise) => {
    // setSelectedIndex(index)
    dispatch({ type: DISPLAY_EXERCISE, payload: exercise })
  }

  const renderExercises = muscles => {
    return exercises_by_muscles[muscles].map((exercise, index) => (
      <ListItem
        key={exercise.id}
        button
        onClick={() => handleListItemClick(index, exercise)}
      >
        <ListItemText primary={exercise.title} />
      </ListItem>
    ))
  }

  const renderExercisesByMuscles = exercises_by_muscles => {
    const muscels_groups = Object.keys(exercises_by_muscles)

    return muscels_groups.map((muscles, index) => (
      <Fragment key={index}>
        <div>
          <Typography variant="h5">{muscles.toUpperCase()}</Typography>
        </div>
        <List>{renderExercises(muscles)}</List>
      </Fragment>
    ))
  }

  return (
    <Paper style={styles}>
      {renderExercisesByMuscles(exercises_by_muscles)}
    </Paper>
  )
}

export default LeftPane
