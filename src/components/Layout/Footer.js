import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { fetchExercisesByMuscles } from '../../actions'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

export default function CenteredTabs() {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const muscles = useSelector(state => state.muscles)
  const dispatch = useDispatch()

  useEffect(() => {}, [dispatch])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const renderMuscleList = muscles => {
    return muscles.map(muscle => (
      <Tab
        onClick={() => onClickOne(muscle.name)}
        key={muscle.id}
        label={muscle.name}
      />
    ))
  }

  const onClickAll = () => {
    dispatch(fetchExercisesByMuscles(''))
  }
  const onClickOne = group => {
    dispatch(fetchExercisesByMuscles(group))
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab key="0" label="All" onClick={onClickAll} />
        {renderMuscleList(muscles)}
      </Tabs>
    </Paper>
  )
}
