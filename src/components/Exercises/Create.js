import React from 'react'
import Fab from '@material-ui/core/Fab'
import Add from '@material-ui/icons/Add'

import { useDispatch } from 'react-redux'
import { OPEN_FORM_DIALOG } from '../../actions/types'

export default function CreateDialog() {
  const dispatch = useDispatch()

  const handleOpen = () => {
    const payload = {
      title: 'Create a new Exercise',
      exercise: null
    }
    dispatch({ type: OPEN_FORM_DIALOG, payload })
  }

  return (
    <div>
      <Fab onClick={handleOpen} aria-label="add" size="medium">
        <Add />
      </Fab>
    </div>
  )
}
