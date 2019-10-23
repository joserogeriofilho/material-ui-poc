import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { debounce } from 'lodash';
import { Fab, Grid, Hidden, Paper, TextField, Typography } from '@material-ui/core'
import withStyles from '@material-ui/styles/withStyles'
import AddIcon from '@material-ui/icons/Add';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import { UserTable } from '../components/UserTable'
import { ScoreCard } from '../components/ScoreCard'
import UserService from '../service/UserService'


const DEBOUNCE_TIME = 500;

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

    this.state = {
      users: [],
      pagination: {
        page: 0,
        totalCount: 1,
        rowsPerPage: 5
      },
      searchValue: '',
      isLoading: false,
      error: null
    };
  }

  getUsers = ( searchValue = this.state.searchValue) => {    
    this.setState({ isLoading: true });
    UserService.getUsers(
      this.state.pagination.page + 1,
      this.state.pagination.rowsPerPage, 
      searchValue)
      .then(response => {        
        this.setState({
          users: response.data,
          pagination: {
            ...this.state.pagination,
            totalCount: parseInt(response.totalCount, 10)
          }
        });
      })
      .catch(error => {
        this.setState({ error: error })
      })
      .finally(() => {
        this.setState({ isLoading: false })
      });
  }

  handleDeleteUser = id => {
    UserService.deleteUser(id)
      .then(data => {
        this.getUsers();
      })
      .catch(error => {
        console.log(error);        
      });
  }

  handleSearch = debounce( value => {
    this.setState({
      searchValue: value.toLowerCase(),
      pagination: {
        ...this.state.pagination,
        page: 0
      }
    }, () => this.getUsers());    
  }, DEBOUNCE_TIME);

  handleChangePage = page => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        page: page
      }
    }, () => this.getUsers());
  }

  handleChangeRowsPerPage = rowsPerPage => {    
    this.setState({
      pagination: {
        ...this.state.pagination,
        rowsPerPage: rowsPerPage
      }
    }, () => this.getUsers());
  }

  componentDidMount() {
    this.getUsers();
  }

  render(){
    const { classes } = this.props;
    const pageTitle = "Users";
    const users = this.state.users;
    const page = this.state.pagination.page;
    const totalCount = this.state.pagination.totalCount;
    const rowsPerPage = this.state.pagination.rowsPerPage;
    const search = this.state.search;
    const isLoading = this.state.isLoading;
    const error = this.state.error;

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
                      onChange={e => this.handleSearch(e.target.value)}
                      margin="dense"
                      variant="outlined"
                      fullWidth />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <UserTable
                    users={users}
                    page={page}
                    totalCount={totalCount}
                    rowsPerPage={rowsPerPage}
                    isLoading={isLoading}
                    error={error}
                    onDeleteUser={this.handleDeleteUser}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage} />
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
          to={{ pathname: '/user', state: {} }} >
          <AddIcon />
        </Fab>
      </DrawerTopBarLayout>
    );
  }
}

export default withRouter(withStyles(styles)(UsersPage));