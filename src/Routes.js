import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import CardGridPage from './pages/CardGridPage'
import Teste from './pages/Teste'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/home' component={ HomePage } />
            <Route exact path='/users' component={ UsersPage } />
            <Route exact path='/cardGrid' component={ CardGridPage } />
            <Route exact path='/teste' component={ Teste } />
        </Switch>
    </BrowserRouter>
  )