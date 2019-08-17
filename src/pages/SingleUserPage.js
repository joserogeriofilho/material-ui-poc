import React, { Component } from 'react'
import DrawerTopBarLayout   from '../layouts/DrawerTopBarLayout'
import Grid                 from '@material-ui/core/Grid'
import Typography           from '@material-ui/core/Typography'
import Paper                from '@material-ui/core/Paper'
import TextField            from '@material-ui/core/TextField'
import Hidden               from '@material-ui/core/Hidden'
import Button               from '@material-ui/core/Button'
import IconButton           from '@material-ui/core/IconButton'
import Icon                 from '@material-ui/core/Icon'
import Dialog               from '@material-ui/core/Dialog'
import DialogContent        from '@material-ui/core/DialogContent'
import DialogContentText    from '@material-ui/core/DialogContentText'
import CircularProgress     from '@material-ui/core/CircularProgress'
import DialogActions        from '@material-ui/core/DialogActions'
import DialogTitle          from '@material-ui/core/DialogTitle'
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
  dialogActions: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  loadingDialog: {
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'hidden'
  }
});

const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_QUERY = 'users';


export class SingleUserPage extends Component {

  constructor(props){
    super(props);

    this.postUser = this.postUser.bind(this);
    this.putUser = this.putUser.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);   
    this.handleDialogConfirm = this.handleDialogConfirm.bind(this);

    let user = props.location.state.user;

    this.state = {
      user: user,
      values: {
        lastName: typeof user === 'undefined' ? '' : user.lastName,
        firstName: typeof user === 'undefined' ? '' : user.firstName,
        userName: typeof user === 'undefined' ? '' : user.userName,
        email: typeof user === 'undefined' ? '' : user.email
      },
      errors: {
        lastName: false,
        firstName: false,
        userName: false,
        email: false
      },
      loading: false,
      dialogState: 0,   // 0 closed, 1 success, 2 error
    }
  }

  postUser(){
    fetch(API_URL + DEFAULT_QUERY,
      {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          firstName: this.state.values.firstName,
          lastName: this.state.values.lastName,
          userName: this.state.values.userName,
          email: this.state.values.email
        })
      }
    ).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong...')
      }
    }).then((data) => {
      this.setState({ loading: false, dialogState: 1 })
    })
    .catch((err) => {
      this.setState({ loading: false, dialogState: 2 })
    });
  }

  putUser() {
    this.setState({ loading: true });
    
    fetch(API_URL + DEFAULT_QUERY + '/' + this.state.user.id,
    {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        firstName: this.state.values.firstName,
        lastName: this.state.values.lastName,
        userName: this.state.values.userName,
        email: this.state.values.email
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
      this.setState({ loading: false, dialogState: 1 })
    ).catch(error =>
      this.setState({ loading: false, dialogState: 2 })
    );
  }

  goBack() {
    this.props.history.goBack();
  }

  handleChange(event) {
    let change = { values: this.state.values };
    change.values[event.target.id] = event.target.value;
    this.setState(change);
  }

  validate() {
    let newState = {
      errors: {
        lastName: false,
        firstName: false,
        userName: false,
        email: false
      }
    };

    let hasErrors = false;

    if ( this.state.values.firstName === '' ) {
      newState.errors.firstName = true;
      hasErrors = true;
    }

    this.setState(newState);

    return hasErrors;
  }

  registerUser() {
    if ( !this.validate() ) {
      this.postUser();
    }
  }

  editUser() {
    if ( !this.validate() ) {
      this.putUser();
    }
  }

  handleDialogClose() {
    this.setState({dialogState: 0});
  }

  handleDialogConfirm() {
    this.setState({dialogState: 0});
    this.goBack();
  }

  render(){
    const { classes } = this.props;

    const user = this.state.user;
    const values = this.state.values;
    const errors = this.state.errors;
    const dialogState = this.state.dialogState;
    const loading = this.state.loading;

    let pageTitle, buttonLabel, buttonClick, successMessage;

    let firstNameErrorMsg = errors.firstName ? 'The first name cannot be empty.' : '';

    // Change title, submit button's label and action and confirmation dialog message
    // according if the user is editing or registering a new user
    if ( typeof user === 'undefined' ) {
      pageTitle = 'New User';
      buttonLabel = 'REGISTER';
      buttonClick = this.registerUser;
      successMessage = 'User registered successfully.'
    } else {
      pageTitle = 'Edit User';
      buttonLabel = 'SAVE';
      buttonClick = this.editUser;
      successMessage = 'Changes successfully updated.'
    }

    const loadingDialog = (
      <Dialog
        open={loading}
        classes={{paper: classes.loadingDialog}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
          <CircularProgress color="secondary" />
      </Dialog>
    );

    const successDialog = (
      <Dialog
        open={dialogState !== 0}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">Success</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {successMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDialogConfirm} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );

    const errorDialog = (
      <Dialog
        open={dialogState !== 0}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">Error</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Something went wrong. Please, try again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDialogClose} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );

    return(
      <DrawerTopBarLayout
        returnTo={'/users'}
        title={pageTitle}>
        <Grid container spacing={3}>
  
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>

                <Hidden smDown>
                  <Grid item xs={12} container justify='flex-start' alignItems='center'>
                    <IconButton
                      onClick={this.goBack}
                      edge="start"
                      aria-label="Return">
                      <Icon>arrow_back</Icon>
                    </IconButton>
                    <Typography variant="h6" component="h3">
                      {pageTitle}
                    </Typography>
                  </Grid>
                </Hidden>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    value={values.lastName}
                    onChange={this.handleChange}
                    margin="dense"
                    variant='outlined'
                    helperText=""
                    error={errors.lastName}
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                    helperText={firstNameErrorMsg}
                    error={errors.firstName}
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="userName"
                    label="Username"
                    value={values.userName}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                    helperText=""
                    error={errors.userName}
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="E-mail"
                    value={values.email}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                    helperText="We'll never share your e-mail with anyone else."
                    error={errors.email}
                    fullWidth />
                </Grid>
                <Grid item xs={12} justify="flex-end" container>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={buttonClick} >
                    {buttonLabel}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          { loading ? loadingDialog : null }

          { dialogState === 1 ? successDialog : null }

          { dialogState === 2 ? errorDialog : null }
  
        </Grid>
      </DrawerTopBarLayout>
    );
  }
}

export default withStyles(styles)(SingleUserPage);