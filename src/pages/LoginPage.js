import React, { Component }   from 'react'
import Button                 from '@material-ui/core/Button'
import CircularProgress       from '@material-ui/core/CircularProgress'
import Dialog                 from '@material-ui/core/Dialog'
import DialogContent          from '@material-ui/core/DialogContent'
import DialogContentText      from '@material-ui/core/DialogContentText'
import DialogActions          from '@material-ui/core/DialogActions'
import DialogTitle            from '@material-ui/core/DialogTitle'
import Grid                   from '@material-ui/core/Grid'
import Paper                  from '@material-ui/core/Paper'
import TextField              from '@material-ui/core/TextField'
import withStyles             from '@material-ui/styles/withStyles'
import { Typography }         from '@material-ui/core'
import { GoogleLogin }        from 'react-google-login'
import Http                    from '../Http'
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
  },
  loadingDialog: {
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'hidden'
  }
});

const GOOGLE_CLIENT_ID = "839852421288-2b65201lpgk9bqfssjo0ir45mj1va2vd.apps.googleusercontent.com";


class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.googleResponse = this.googleResponse.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.login = this.login.bind(this);

    this.state = { 
      email: '',
      password: '',
      googleProfileObj: null,
      googleAccessToken: null,
      loading: false,
      error: false
    }
  }

  googleResponse = (response) => {
    this.setState({ googleProfileObj: response.profileObj, googleAccessToken: response.accessToken });
    this.login();
  };

  googleFailure = (error) => {
    console.log(error);
  }

  login(){
    this.setState({ loading: true });

    Http.post('login',
      {
        email: this.state.email,
        password: this.state.password,
        googleProfileObj: this.state.googleProfileObj,
        googleAccessToken: this.state.googleAccessToken
      }
    ).then(response => {
      if ( response.status === 201 ) {
        this.setState({ loading: false });
        login(response.authToken);
        this.props.history.push('/');
      } else if ( response.status === 401 ) {
        throw new Error('Icorrect e-mail or password.')
      }
    }).catch((error) => {
      // Show message on interface
      console.log(error);
      this.setState({ loading: false, error: true });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDialogClose() {
    this.setState({error: false});
  }

  render() { 
    const { classes } = this.props;

    const loadingDialog = (
      <Dialog
        open={this.state.loading}
        classes={{paper: classes.loadingDialog}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
          <CircularProgress color="secondary" />
      </Dialog>
    );

    const errorDialog = (
      <Dialog
        open={this.state.error}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">Error</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Login failed. Please, try again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDialogClose} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );

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
                    onClick={this.login} >
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
                    buttonText="Login with Google"
                    onSuccess={this.googleResponse}
                    onFailure={this.googleFailure} />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        { this.state.loading && loadingDialog }

        { this.state.error && errorDialog }

      </Grid>
    );
  }
}
 
export default withStyles(styles)(LoginPage);