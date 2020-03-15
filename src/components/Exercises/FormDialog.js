import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles'
import Form from './Form'

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { CLOSE_FORM_DIALOG } from '../../actions/types'

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: 200
//   }
// }))

export default function FormDialog(props) {
  // const classes = useStyles()

  const form_dialog = useSelector(state => state.form_dialog)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch({ type: CLOSE_FORM_DIALOG })
  }

  return (
    <div>
      <Dialog
        open={form_dialog.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{form_dialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill the form below.</DialogContentText>
          <Form handleClose={handleClose} exercise={form_dialog.exercise} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
