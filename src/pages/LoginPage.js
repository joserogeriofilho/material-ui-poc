import React, { Component }   from 'react'
import Button                 from '@material-ui/core/Button'
import Grid                   from '@material-ui/core/Grid'
import Paper                  from '@material-ui/core/Paper'
import TextField              from '@material-ui/core/TextField'
import withStyles             from '@material-ui/styles/withStyles'
import { Typography }         from '@material-ui/core';
import { GoogleLogin }        from 'react-google-login';


const styles = theme => ({
  container: {
    height: '100%'
  },
  paper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: theme.spacing(3)
    }
  },
  socialButtons: {
    width: '100%'
  }
});

const GOOGLE_CLIENT_ID = "839852421288-2b65201lpgk9bqfssjo0ir45mj1va2vd.apps.googleusercontent.com";


class LoginPage extends Component {
  state = {  }

  googleResponse = (response) => {
    console.log(response);
  };

  onFailure = (error) => {
    alert(error);
  }

  render() { 
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container justify="center" alignItems="center" >
        <Grid item xl={2} lg={3} md={5} sm={7} xs={12}>
          <Paper className={classes.paper} >
            <Grid container justify="center" spacing={4} >
              <Grid container item xs={12} spacing={1} >
                <Grid item xs={12} >
                  <TextField
                    id="username"
                    label="Username"
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="Password"
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary" >
                    SIGNIN
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">Or signin with social networks</Typography>
              </Grid>
              <Grid item xs={12}>
                <GoogleLogin
                  className={classes.socialButtons}
                  clientId={GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={this.googleResponse}
                  onFailure={this.onFailure} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
 
export default withStyles(styles)(LoginPage);