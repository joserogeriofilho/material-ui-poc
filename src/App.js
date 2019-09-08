import React,  { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './Routes'
import rootReducer from './redux/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#E91E63'
    },
    primary: {
      main: '#282E3D'
    }
  }
});

const store = createStore(rootReducer);


export class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </Provider>
    );
  }

}

export default App;
