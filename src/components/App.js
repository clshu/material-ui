import React, { Fragment } from 'react'
import { Header, Footer } from './Layout'
import Excercises from './Excercises'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Excercises />
      <Footer />
    </Fragment>
  )
}

export default App
