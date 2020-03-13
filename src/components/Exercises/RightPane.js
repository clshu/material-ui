import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const RightPane = ({ styles }) => {
  return (
    <Paper style={styles}>
      <Typography variant="h4">Welcome!</Typography>
      <Typography variant="body1">
        Click a muscle group on the bottom first.
      </Typography>
      <Typography variant="body1">
        Then select an exercise from the list on the left
      </Typography>
    </Paper>
  )
}

export default RightPane
