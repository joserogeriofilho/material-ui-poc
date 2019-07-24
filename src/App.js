import React,  { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import withStyles from '@material-ui/styles/withStyles';
import { blue, indigo } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import CustomNavigationDrawer from './components/CustomNavigationDrawer'


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  }
});

const styles = theme => ({
  wrapper: {
    display: 'flex',
    height: '100%'
  },
  navDrawer: {
    height: '100%'
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  }
});


class App extends Component {

  state = {
    openDrawer: false
  };

  mobileMenuOpen = (event) => {
    this.setState({ openDrawer: true });
  }

  mobileMenuClose = (event) => {
    this.setState({ openDrawer: false });
  }

  render(){
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <div className={classes.wrapper}>
            <div className={classes.navDrawer}>
              <CustomNavigationDrawer />
            </div>
            <div className={classes.content}>
              <Switch>
                <Route exact path='/' component={ Page1 } />
                <Route exact path='/page1' component={ Page1 } />
                <Route exact path='/page2' component={ Page2 } />
                <Route exact path='/page3' component={ Page3 } />
              </Switch>
            </div>
          </div>
        </BrowserRouter>

      </ThemeProvider>      
    );
  }

}

export default withStyles(styles)(App);
