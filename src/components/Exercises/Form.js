import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, MenuItem, Button, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { createExercise } from '../../actions'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 500
    }
  }
}))

export default function Form(props) {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [muscles, setMuscles] = useState('')
  const muscles_groups = useSelector(state => state.muscles)
  const dispatch = useDispatch()

  if (props.exercise) {
    const { title, description, muscles } = props.exercise
    setTitle(title)
    setDescription(description)
    setMuscles(muscles)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (props.exercise) {
      console.log(props.exercise)
      console.log({ title, description, muscles })
    } else {
      dispatch(createExercise({ title, description, muscles }))
    }
    props.handleClose()
  }

  const handleCancel = () => {
    props.handleClose()
  }

  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = event => {
    setDescription(event.target.value)
  }

  const handleChangeMuscles = event => {
    setMuscles(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <div>
          <TextField
            onChange={handleChangeTitle}
            value={title}
            required
            label="Title"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            onChange={handleChangeDescription}
            value={description}
            required
            label="Description"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            select
            required
            label="Muscels"
            value={muscles}
            onChange={handleChangeMuscles}
            helperText="Please select the muscle group"
            variant="filled"
          >
            {muscles_groups.map(option => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button variant="contained" onClick={handleCancel} color="secondary">
            Cancel
          </Button>
        </div>
      </FormControl>
    </form>
  )
}
