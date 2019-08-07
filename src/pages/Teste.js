import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import grey from '@material-ui/core/colors/grey';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import { UserTable } from '../components/UserTable'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ScoreCard } from '../components/ScoreCard'


const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: theme.spacing(0, 1, 2, 1)
    }
  },
  paperButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  floatButton: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5)
  },
  paperIndicator: {

  },
  indicatorHeader: {
    backgroundColor: grey[200],
    borderRadius: '4px 0 0 4px',
    padding: theme.spacing(3)
  },
  indicatorBody: {
    padding: theme.spacing(3)
  }
});

const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_QUERY = 'users';
const SEARCH_QUERY = '?q=';
const SORT_QUERY = '?_sort=lastName&_order=asc';


export class Teste extends Component {

  constructor(props){
    super(props);

    this.getUsers = this.getUsers.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  state = {
    search: '',
    users: [],
    isLoading: false,
    error: null
  };

  getUsers() {
    this.setState({ isLoading: true });

    fetch(API_URL + DEFAULT_QUERY + SEARCH_QUERY + this.state.search)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong...')
      }
    })
    .then(data =>
      this.setState({ users: data, isLoading: false})
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

  handleSearch(event){
    this.setState({ search: event.target.value });
    this.getUsers();
  }

  componentDidMount() {
    this.getUsers();
  }

render(){
  const { classes } = this.props;
  const pageTitle = "Users";

  const search = this.state.search;
  const users = this.state.users;
  const isLoading = this.state.isLoading;
  const error = this.state.error;
  const handleSearch = this.handleSearch;
  const deleteUser = this.deleteUser;


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

        <Grid item lg={4}>
          <ScoreCard />
        </Grid>
        <Grid item lg={4}>
          <ScoreCard />
        </Grid>
        <Grid item lg={4}>
          <ScoreCard />
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
                  users={users}
                  isLoading={isLoading}
                  error={error}
                  deleteUser={deleteUser}/>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Fab color="secondary" aria-label="add" className={ classes.floatButton }>
        <AddIcon />
      </Fab>
    </DrawerTopBarLayout>
    );
  }

}

export default withRouter(withStyles(styles)(Teste));