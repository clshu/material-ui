import React, { useState } from 'react'
import FormDialog from './Dialog'
import IconButton from '@material-ui/core/IconButton'
import Edit from '@material-ui/icons/Edit'

export default function EditDialog(props) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <Edit />
      </IconButton>
      <FormDialog
        title="Edit an Exercise"
        open={open}
        handleClose={handleClose}
        exercise={props.exercise}
      />
    </div>
  )
}
