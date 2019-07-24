import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

export default props => (
    <Switch>
        <Route exact path='/' component={ Page1 } />
        <Route exact path='/page1' component={ Page1 } />
        <Route exact path='/page2' component={ Page2 } />
        <Route exact path='/page3' component={ Page3 } />
    </Switch>
  )