import React, { Component } from 'react'
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import withStyles           from '@material-ui/styles/withStyles'


const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: theme.spacing(0, 1, 2, 1)
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_QUERY = 'users';


export class SingleUserPage extends Component {

  constructor(props){
    super(props);

    this.putUser = this.putUser.bind(this);
  }

  putUser(user) {
    fetch(API_URL + DEFAULT_QUERY + '/' + user.id,
    {
      method: 'PUT',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        firstName:user.firstName,
        lastName:user.lastName,
        userName:user.userName,
        email:user.email
      })
    }
    ).then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong...')
      }
    })
    .then(data =>
      console.log(data)
    ).catch(error =>
      console.log(error.message)
    );
  }

  render(){
    const { classes } = this.props;
    let user = this.props.location.state.user;
    const pageTitle = typeof user === 'undefined' ? 'Add New User' : `${user.firstName} ${user.lastName}`;

    let firstName = typeof user === 'undefined' ? '' : user.firstName;
    let lastName = typeof user === 'undefined' ? '' : user.lastName;
    let userName = typeof user === 'undefined' ? '' : user.userName;
    let email = typeof user === 'undefined' ? '' : user.email;
    

    return(
      <DrawerTopBarLayout
        returnTo={'/teste'}
        title={pageTitle}>
        <Grid container spacing={3}>
  
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3">
                    {pageTitle}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    value={lastName}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    label="First Name"
                    value={firstName}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="username"
                    label="Username"
                    value={userName}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="E-mail"
                    helperText="We'll never share your e-mail with anyone else."
                    value={email}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} className={classes.buttons}>
                  <Button className={classes.button} >
                    CLEAR FORM
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={this.putUser.bind(this, user)} >
                    ADD USER
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
  
        </Grid>
      </DrawerTopBarLayout>
    );
  }
}

export default withStyles(styles)(SingleUserPage);