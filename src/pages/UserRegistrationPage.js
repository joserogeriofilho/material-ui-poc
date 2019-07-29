import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  paper: {
    padding: theme.spacing(3)
  },
  textFieldRoot: {
    marginTop: theme.spacing(0)
  }
});


export class UserRegistrationPage extends Component {

    render(){
        const { classes } = this.props;
        const pageTitle = "User Registration";
        
        return (
            <DrawerTopBarLayout title={pageTitle}>
              <Grid container spacing={3}>

                <Hidden xsDown>
                  <Grid item xs={12}>
                    <Typography variant="h5" color='secondary' gutterBottom={true}>
                      {pageTitle}
                    </Typography>
                  </Grid>
                </Hidden>

                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Grid container spacing={3}>
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
                        margin="normal"
                        variant="outlined"
                        classes={{root: classes.textFieldRoot}}
                        fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="user-first-name"
                        label="First Name"
                        value={null}
                        onChange={null}
                        margin="normal"
                        variant="outlined"
                        classes={{root: classes.textFieldRoot}}
                        fullWidth />
                    </Grid>
                  </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper>
                    <Typography variant="h5" component="h3">
                      List of Users
                    </Typography>

                  </Paper>
                </Grid>

              </Grid>
            </DrawerTopBarLayout>
        );
    }

}

export default withRouter(withStyles(styles)(UserRegistrationPage));