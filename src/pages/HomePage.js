import React from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import { Container, Grid, Hidden, Typography } from '@material-ui/core';


const styles = theme => ({
  wrapper: {
    padding: theme.spacing(3)
  }
});

const pageTitle = "Home";

export function HomePage({ classes }) {
  return (
    <DrawerTopBarLayout title={pageTitle}>
      <Container className={classes.wrapper}>
        <Grid container spacing={3}>

          <Hidden smDown>
            <Grid item xs={12}>
              <Typography variant="h5" color='secondary'>
                {pageTitle}
              </Typography>
            </Grid>
          </Hidden>

          <Grid item xs={12}>This is some content</Grid>

        </Grid>
      </Container>
    </DrawerTopBarLayout>
  );
}

export default withRouter(withStyles(styles)(HomePage));