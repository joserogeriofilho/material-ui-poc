import React from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'


const styles = theme => ({
  wrapper: {
    padding: theme.spacing(3, 5, 5, 5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3)
    }
  },
  paper: {
    margin: theme.spacing(3, 0, 5, 0),
    padding: theme.spacing(5, 3, 5, 3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      margin: 0,
      padding: theme.spacing(0)
    }
  },
  title: {
    fontWeight: '200'
  }
});

const pageTitle = "Home";

export function HomePage({ classes }) {
  return (
    <DrawerTopBarLayout title={pageTitle}>
      <Container className={classes.wrapper}>        
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <Typography align="center" variant="h4" className={classes.title}>Material-UI</Typography>
                <Typography align="center" color="secondary" variant="h6">Proof of Concept</Typography>

                <Typography align="center">
                  A simple proof of concept React application built with Material-UI components and Redux.
                </Typography>
            
                <br />

                <Typography variant="h6">
                  Main Technologies
                </Typography>
                <ul>
                  <li>React v.4.04</li>
                  <li>Material-UI v.4.04</li>
                  <li>Redux v.4.04</li>
                </ul>

                <Typography variant="h6">
                  How to use it
                </Typography>
                <p>Fork this project on GitHub and modify its content to suit your needs.</p>

                <Typography variant="h6">
                  GitHub Repository
                </Typography>
                <Link href="https://github.com/joserogeriofilho/material-ui-poc" color="secondary">joserogeriofilho/material-ui-poc</Link>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            ​​​​​​​<Typography align="center">
              If you like to see more of my work:
              <br/>
              <Link target="_blank" href="https://github.com/joserogeriofilho" color="secondary">GitHub</Link> |
              <Link target="_blank" href="https://www.linkedin.com/in/joserogeriofilho/" color="secondary"> Linkedin</Link> |
              <Link target="_blank" href="https://www.behance.net/joserogeriofilho" color="secondary"> Behance</Link>
            </Typography>
            <br/>
            <Typography align="center">
              Contact
              <br/>
              jose.rogerio.filho@gmail.com
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </DrawerTopBarLayout>
  );
}

export default withRouter(withStyles(styles)(HomePage));