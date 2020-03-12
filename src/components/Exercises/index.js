import React from 'react'
import { Grid } from '@material-ui/core'
import RightPane from './RightPane'
import LeftPane from './LeftPane'

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 20 }
}
export default () => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane style={style.Paper} />
      </Grid>
      <Grid item sm>
        <RightPane style={style.Paper} />
      </Grid>
    </Grid>
  )
}
