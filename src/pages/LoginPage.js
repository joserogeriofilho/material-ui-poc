import React, { Component } from 'react'
import Grid                 from '@material-ui/core/Grid'
import Paper                from '@material-ui/core/Paper'
import withStyles           from '@material-ui/styles/withStyles'


const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: theme.spacing(0)
    }
  }
});


class LoginPage extends Component {
  state = { }

  render() { 
    const { classes } = this.props;

    return (
      <Grid container spacing={3} justify="center">
        <Grid item xl={4} sm={6} xs={12}>
          <Paper className={classes.paper} >Hello</Paper>
          </Grid>
      </Grid>
    );
  }
}
 
export default withStyles(styles)(LoginPage);