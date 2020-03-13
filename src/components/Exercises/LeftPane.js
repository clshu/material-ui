import React, { Fragment, useState } from 'react'
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { useSelector } from 'react-redux'

const LeftPane = ({ styles }) => {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const exercises_by_muscles = useSelector(state => state.exercises_by_muscles)

  const handleListItemClick = (index, exercise) => {
    setSelectedIndex(index)
    console.log(exercise)
  }

  const renderExercises = muscles => {
    return exercises_by_muscles[muscles].map((exercise, index) => (
      <ListItem
        key={exercise.id}
        button
        selected={selectedIndex === index}
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
  // {
  //   exercises_by_muscles[muscles].map(excercis => {
  //     return
  //   })
  // }
  return (
    <Paper style={styles}>
      {renderExercisesByMuscles(exercises_by_muscles)}
    </Paper>
  )
}

export default LeftPane
