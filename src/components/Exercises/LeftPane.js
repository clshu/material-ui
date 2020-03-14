import React from 'react'
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { DISPLAY_EXERCISE } from '../../actions/types'
import { Delete } from '@material-ui/icons'

import { deleteExercise } from '../../actions'

const LeftPane = ({ styles }) => {
  const exercises_by_muscles = useSelector(state => state.exercises_by_muscles)
  const dispatch = useDispatch()

  const handleListItemClick = exercise => {
    // setSelectedIndex(index)
    dispatch({ type: DISPLAY_EXERCISE, payload: exercise })
  }

  const onDelete = exercise => {
    dispatch(deleteExercise(exercise))
  }

  const renderExercises = muscles => {
    return exercises_by_muscles[muscles].map(exercise => (
      <ListItem
        key={exercise.id}
        button
        onClick={() => handleListItemClick(exercise)}
      >
        <ListItemText primary={exercise.title} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => onDelete(exercise)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))
  }

  const renderExercisesByMuscles = exercises_by_muscles => {
    const muscels_groups = Object.keys(exercises_by_muscles)

    return muscels_groups.map((muscles, index) => (
      <div key={index}>
        <div>
          <Typography variant="h5">{muscles.toUpperCase()}</Typography>
        </div>
        <List>{renderExercises(muscles)}</List>
      </div>
    ))
  }

  return (
    <Paper style={styles}>
      {renderExercisesByMuscles(exercises_by_muscles)}
    </Paper>
  )
}

export default LeftPane
