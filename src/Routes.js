import React                            from 'react'
import HomePage                         from './pages/HomePage'
import UsersPage                        from './pages/UsersPage'
import ChildRoutesPage                     from './pages/ChildRoutesPage'
import SingleUserPage                   from './pages/SingleUserPage'
import LoginPage                        from './pages/LoginPage'
import { getAccessToken }               from './Auth'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom'

export default props => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path='/' component={ HomePage } />
      <PrivateRoute path='/users' component={ UsersPage } />
      <PrivateRoute path='/childRoutes' component={ ChildRoutesPage } />
      <PrivateRoute path='/user/:id' component={ SingleUserPage } />
      <PrivateRoute path='/user' component={ SingleUserPage } />
      <Route exact path='/login' component={ LoginPage } />
    </Switch>
  </BrowserRouter>
)

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      { ...rest }
      render={ props =>
        getAccessToken() ?
        ( <Component {...props} /> )
        :
        ( <Redirect
            component={ LoginPage }
            to={{ pathname: "/login", state: { from: props.location } }} /> )
      } />
  );
}