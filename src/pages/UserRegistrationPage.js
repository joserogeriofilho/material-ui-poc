import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  paperRoot: {
    padding: theme.spacing(3, 2)
  }
});


export class UserRegistrationPage extends Component {

    render(){
        const { classes } = this.props;
        const pageTitle = "User Registration";
        
        return (
            <DrawerTopBarLayout title={pageTitle}>

            <Container>
              <Grid container>

                <Hidden xsDown implementation="css">
                  <Grid item xs={12}>
                    <Typography variant="h5" color='secondary'>
                      {pageTitle}
                    </Typography>
                  </Grid>
                </Hidden>

                <Grid item xs={12}>
                  <Paper className={classes.paperRoot}>
                    <Typography variant="h5" component="h3">
                      Add New User
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paperRoot}>
                    <Typography variant="h5" component="h3">
                      List of Users
                    </Typography>

                  </Paper>
                </Grid>

              </Grid>
            </Container>

            </DrawerTopBarLayout>
        );
    }

}

export default withRouter(withStyles(styles)(UserRegistrationPage));