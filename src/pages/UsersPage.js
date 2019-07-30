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


export class UsersPage extends Component {

    render(){
        const { classes } = this.props;
        const pageTitle = "Users";
        
        return (
            <DrawerTopBarLayout title={pageTitle}>
              <Grid container spacing={3}>

                <Hidden xsDown>
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
                          id="user-last-name"
                          label="Last Name"
                          value={null}
                          onChange={null}
                          margin="dense"
                          variant="outlined"
                          fullWidth />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="user-first-name"
                          label="First Name"
                          value={null}
                          onChange={null}
                          margin="dense"
                          variant="outlined"
                          fullWidth />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="user-name"
                          label="Username"
                          value={null}
                          onChange={null}
                          margin="dense"
                          variant="outlined"
                          fullWidth />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="user-email"
                          label="E-mail"
                          helperText="We'll never share your e-mail with anyone else."
                          value={null}
                          onChange={null}
                          margin="dense"
                          variant="outlined"
                          fullWidth />
                      </Grid>
                      <Grid item xs={12} className={classes.buttons}>
                        <Button className={classes.button}>
                          CLEAR FORM
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button}>
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
                    </Grid>
                  </Paper>
                </Grid>

              </Grid>
            </DrawerTopBarLayout>
        );
    }

}

export default withRouter(withStyles(styles)(UsersPage));