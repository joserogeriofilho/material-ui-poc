import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Fab                  from '@material-ui/core/Fab';
import Grid                 from '@material-ui/core/Grid'
import Hidden               from '@material-ui/core/Hidden'
import Paper                from '@material-ui/core/Paper'
import TextField            from '@material-ui/core/TextField'
import Typography           from '@material-ui/core/Typography'
import withStyles           from '@material-ui/styles/withStyles'
import AddIcon              from '@material-ui/icons/Add';
import { UserTable }        from '../components/UserTable'
import { ScoreCard }        from '../components/ScoreCard'
import DrawerTopBarLayout   from '../layouts/DrawerTopBarLayout'


const styles = theme => ({
  paper: {
    margin: theme.spacing(3, 0, 5, 0),
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: theme.spacing(0)
    }
  },
  paperButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  floatButton: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  }
});

const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_QUERY = 'users';
const SORT_QUERY = '?_sort=lastName&_order=asc';


export class Teste extends Component {

  constructor(props){
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  state = {
    users: [],
    matchedUsers: [],
    isLoading: false,
    error: null
  };


  // Fetch API functions
  getUsers() {
    this.setState({ isLoading: true });

    //fetch(API_URL + DEFAULT_QUERY + SEARCH_QUERY + this.state.search)
    fetch(API_URL + DEFAULT_QUERY + SORT_QUERY)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong...')
      }
    })
    .then(data =>
      this.setState({ users: data, matchedUsers: data, isLoading: false})
    ).catch(error =>
      this.setState({ error, isLoading: false })
    );
  }

  deleteUser(id){
    fetch(API_URL + DEFAULT_QUERY + '/' + id,
      {
        method: 'DELETE',
      }
    ).then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong...')
      }
    }).then(() => {
      this.getUsers();
    })
    .catch((err) => console.log(err));
  }

  // Handles
  handleSearch(event){
    let matches = this.state.users.filter(user => 
      user.firstName.toLowerCase().includes( event.target.value.toLowerCase() ) ||
      user.lastName.toLowerCase().includes( event.target.value.toLowerCase() ) ||
      user.userName.toLowerCase().includes( event.target.value.toLowerCase() ) ||
      user.email.toLowerCase().includes( event.target.value.toLowerCase() )
    );

    this.setState({ matchedUsers: matches })
  }

  // React Components lifecycle functions
  componentDidMount() {
    this.getUsers();
  }

  render(){
    const { classes } = this.props;
    const pageTitle = "Users";

    const search = this.state.search;
    const isLoading = this.state.isLoading;
    const error = this.state.error;
    const handleSearch = this.handleSearch;
    const deleteUser = this.deleteUser;

    return (
      <DrawerTopBarLayout title={pageTitle}>
        <Grid container spacing={2}>
          <Hidden smDown>
            <Grid item xs={12}>
              <Typography variant="h5" color='secondary'>
                {pageTitle}
              </Typography>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={4}>
            <ScoreCard icon="people_outline" label="Total users" value="26" />
          </Grid>
          <Grid item xs={6} sm={4}>
          <ScoreCard icon="work_outline" label="Categories" value="3" />
          </Grid>
          <Grid item xs={6} sm={4}>
          <ScoreCard icon="cake_outline" label="Mean age" value="27,6" />
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid container item xs={12} alignItems="center">
                  <Grid item xs={6}>
                    <Typography variant="h6" component="h3">
                      List and Search
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="usersSearch"
                      label="Search"
                      value={search}
                      onChange={handleSearch}
                      margin="dense"
                      variant="outlined"
                      fullWidth />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <UserTable
                    users={this.state.matchedUsers}
                    isLoading={isLoading}
                    error={error}
                    deleteUser={deleteUser}/>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Link to={{ pathname: '/teste/singleUser', state: {} }}>
          <Fab color="secondary" aria-label="add" className={classes.floatButton}>
            <AddIcon />
          </Fab>
        </Link>
      </DrawerTopBarLayout>
    );
  }
}

export default withRouter(withStyles(styles)(Teste));