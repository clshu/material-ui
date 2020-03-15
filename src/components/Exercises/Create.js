import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import Add from '@material-ui/icons/Add'
import FormDialog from './Dialog'

export default function CreateDialog() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Fab onClick={handleOpen} aria-label="add" size="medium">
        <Add />
      </Fab>
      <FormDialog
        open={open}
        handleClose={handleClose}
        title="Create a new Exercise"
      />
    </div>
  )
}
