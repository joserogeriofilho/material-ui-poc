import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Fab, Grid, Hidden, Paper, TextField, Typography } from '@material-ui/core'
import withStyles from '@material-ui/styles/withStyles'
import AddIcon from '@material-ui/icons/Add';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import { UserTable } from '../components/UserTable'
import { ScoreCard } from '../components/ScoreCard'
import UserService from '../service/UserService'


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


export class UsersPage extends Component {

  constructor(props){
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      users: [],
      pagination: {
        page: 1,
        totalCount: null,
        limit: 5
      },
      searchValue: '',
      isLoading: false,
      error: null
    };
  }

  getUsers( searchValue = this.state.searchValue) {    
    this.setState({ isLoading: true });
    UserService.getUsers(
      this.state.pagination.page,
      this.state.pagination.limit, 
      searchValue
    )
      .then(response => {        
        this.setState({
          users: response.data,
          totalCount: parseInt(response.totalCount, 10)
        });
      })
      .catch(error => {
        this.setState({ error: error })
      })
      .finally(() => {
        this.setState({ isLoading: false })
      });
  }

  deleteUser(id){
    UserService.deleteUser(id)
      .then(data => {
        this.getUsers();
      })
      .catch(error => {
        console.log(error);        
      })
      .finally(() => {
        
      });
  }

  handleSearch(event){
    const value = event.target.value.toLowerCase();
    this.setState({
      searchValue: value
    });
    this.getUsers(value);
  }

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
                    users={this.state.users}
                    totalCount={this.state.totalCount ? this.state.totalCount : 0}
                    isLoading={isLoading}
                    error={error}
                    deleteUser={deleteUser} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Fab
          color="secondary"
          aria-label="add"
          className={classes.floatButton}
          component={Link}
          to={{ pathname: '/singleUser', state: {} }} >
          <AddIcon />
        </Fab>
      </DrawerTopBarLayout>
    );
  }
}

export default withRouter(withStyles(styles)(UsersPage));