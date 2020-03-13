import React, { useState } from 'react'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Add } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'

import { createExercise } from '../../actions'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 500
    }
  }
}))

export default function FormDialog() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [group, setGroup] = useState('')
  const muscles_groups = useSelector(state => state.muscles)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setTitle('')
    setDescription('')
    setGroup('')
    dispatch(createExercise({ title, description, muscles: group }))
  }

  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = event => {
    setDescription(event.target.value)
  }

  const handleChangeGroup = event => {
    setGroup(event.target.value)
  }

  return (
    <div>
      <Fab onClick={handleClickOpen} aria-label="add" size="medium">
        <Add />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill the form below.</DialogContentText>
          <form className={classes.root} noValidate autoComplete="off">
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
                value={group}
                onChange={handleChangeGroup}
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" type="submit">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
