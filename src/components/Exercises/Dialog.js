import React from 'react'
import Form from './Form'

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

export default function FormDialog(props) {
  const handleClose = () => {
    props.handleClose()
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill the form below.</DialogContentText>
          <Form handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
