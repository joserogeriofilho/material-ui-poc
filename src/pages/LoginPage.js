import React, { Component }   from 'react'
import Button                 from '@material-ui/core/Button'
import Grid                   from '@material-ui/core/Grid'
import Paper                  from '@material-ui/core/Paper'
import TextField              from '@material-ui/core/TextField'
import withStyles             from '@material-ui/styles/withStyles'
import { Typography }         from '@material-ui/core'
import { GoogleLogin }        from 'react-google-login'
import { login }              from '../Auth'


const styles = theme => ({
  height100: {
    height: '100%'
  },
  paper: {
    padding: theme.spacing(4),
    paddingBottom: '40px',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  },
  loginButtons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  socialButtons: {
    width: '100%',
    justifyItems: 'center'
  }
});

const GOOGLE_CLIENT_ID = "839852421288-2b65201lpgk9bqfssjo0ir45mj1va2vd.apps.googleusercontent.com";


class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.googleResponse = this.googleResponse.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fakeLogin = this.fakeLogin.bind(this);

    this.state = { 
      email: '',
      password: '',
      googleProfileObj: null,
      googleAccessToken: null,
    }
  }

  googleResponse = (response) => {
    this.setState({ googleProfileObj: response.profileObj, googleAccessToken: response.accessToken });
    this.login();
  };

  googleFailure = (error) => {
    alert(error);
  }

  login(){
    fetch('login',
      {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          googleProfileObj: this.state.googleProfileObj,
          googleAccessToken: this.state.googleAccessToken
        })
      }
    ).then(response => {
      if(response.statusText === 'AUTHORIZED') {
        console.log(response);
        return response.data;
      } else {
        throw new Error('Icorrect e-mail or password.')
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  fakeLogin() {
    login('mcd02w9fjrh298hd109jd01u0912e');
    this.props.history.push('/users');
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() { 
    const { classes } = this.props;

    return (
      <Grid className={classes.height100} container justify="center" alignItems="center" >
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
          <Paper className={classes.paper} >
            <Grid container justify="center" spacing={4} >
              <Grid spacing={2} container item xs={12} >
                <Grid item xs={12} >
                  <TextField
                    id="email"
                    label="E-mail"
                    margin="dense"
                    variant="outlined"
                    value={this.state.email}
                    onChange={this.handleChange}
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="Password"
                    margin="dense"
                    variant="outlined"
                    value={this.state.password}
                    onChange={this.handleChange}
                    fullWidth />
                </Grid>
                <Grid item xs={12} className={classes.loginButtons}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.fakeLogin} >
                    SIGNIN
                  </Button>
                </Grid>
              </Grid>
              <Grid spacing={2} container item xs={12} >
                <Grid item xs={12}>
                  <Typography variant="caption">Or signin with social networks</Typography>
                </Grid>
              </Grid>
              <Grid spacing={2} container item xs={12} >
                <Grid item xs={12}>
                  <GoogleLogin
                    className={classes.socialButtons}
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.googleFailure} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
 
export default withStyles(styles)(LoginPage);