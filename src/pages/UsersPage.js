import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
const SORT_QUERY = '?_sort=lastName&_order=asc';


export class UsersPage extends Component {

  constructor(props){
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postNewUser = this.postNewUser.bind(this);
  }

  state = {
    values: {
      lastName: '',
      firstName: '',
      username: '',
      email: '',
    },
    users: [],
    isLoading: false,
    error: null
  };

  getUsers() {
    this.setState({ isLoading: true });

    fetch(API_URL + DEFAULT_QUERY + SORT_QUERY)
      .then(response => {
          if(response.ok) {
              return response.json()
          } else {
              throw new Error('Something went wrong...')
          }
      })
      .then(data => this.setState({ users: data, isLoading: false}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  postNewUser(){
    const lastName = this.state.values.lastName;
    const firstName = this.state.values.firstName;
    const username = this.state.values.username;
    const email = this.state.values.email;

    fetch(API_URL + DEFAULT_QUERY,
        {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({firstName:firstName, lastName:lastName, userName:username, email:email})
        }
    ).then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong...')
        }
    }).then((data) => {
        console.log('Insertion of ' + JSON.stringify(data));
        this.clearForm();
        this.getUsers();
    })
    .catch((err) => console.log(err));
  }

  clearForm(){
    let values = {
      lastName: '',
      firstName: '',
      username: '',
      email: '',
    }

    this.setState({ values });
  }

  handleChange(event){
    let change = { values: this.state.values };
    change.values[event.target.id] = event.target.value;
    this.setState(change);
  }

  componentDidMount() {
    this.getUsers();
  }

render(){
  const { classes } = this.props;
  const pageTitle = "Users";
  const values = this.state.values;
  const users = this.state.users;
  const isLoading = this.state.isLoading;
  const error = this.state.error;
  const handleChange = this.handleChange;
  const postNewUser = this.postNewUser;

  let userTable;

  if ( isLoading ){
    userTable =
      <span>Loading...</span>
  } else if ( error ) {
    userTable =
      <div>
        <span>An error ocurred:</span>
        <p>{error.toString()}</p>
      </div>
  } else {
    userTable =
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.users.map(user => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.lastName}
              </TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  }

  return (
    <DrawerTopBarLayout title={pageTitle}>
        <Grid container spacing={3}>

          <Hidden smDown>
            <Grid item xs={12}>
              <Typography variant="h5" color='secondary'>
                {pageTitle}
              </Typography>
            </Grid>
          </Hidden>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3">
                    Add New User
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="username"
                    label="Username"
                    value={values.username}
                    onChange={handleChange}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="E-mail"
                    helperText="We'll never share your e-mail with anyone else."
                    value={values.email}
                    onChange={handleChange}
                    margin="dense"
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={12} className={classes.buttons}>
                  <Button className={classes.button} onClick={this.clearForm}>
                    CLEAR FORM
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.button} onClick={postNewUser}>
                    ADD USER
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3">
                    List of Users
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {userTable}
                </Grid>
              </Grid>
            </Paper>
          </Grid>

        </Grid>
      </DrawerTopBarLayout>
    )
  }

}

export default withRouter(withStyles(styles)(UsersPage));