import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
  wrapper: {
    padding: theme.spacing(3)
  }
});

const pageTitle = "Home";

export function HomePage({ classes }) {
  return (
    <DrawerTopBarLayout title={pageTitle}>
      <Grid className={classes.wrapper} container spacing={3}>

        <Hidden xsDown>
          <Grid item xs={12}>
            <Typography variant="h5" color='secondary'>
              {pageTitle}
            </Typography>
          </Grid>
        </Hidden>

        <Grid item xs={12}>This is some content</Grid>

      </Grid>
    </DrawerTopBarLayout>
  );
}

export default withRouter(withStyles(styles)(HomePage));