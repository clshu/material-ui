import React from 'react'
import { Grid } from '@material-ui/core'
import RightPane from './RightPane'
import LeftPane from './LeftPane'

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default () => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane styles={style.Paper} />
      </Grid>
      <Grid item sm>
        <RightPane styles={style.Paper} />
      </Grid>
    </Grid>
  )
}
