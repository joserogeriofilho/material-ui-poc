import React,  { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './Routes'


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


export class App extends Component {

  render(){
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>      
    );
  }

}

export default App;
