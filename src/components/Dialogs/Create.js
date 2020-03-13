import React from 'react'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from '@material-ui/core'

import { Add } from '@material-ui/icons'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        color="secondary"
        aria-label="add"
        size="medium"
      >
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Exercise"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
