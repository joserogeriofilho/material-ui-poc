import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const useStyles = makeStyles(theme => ({
  root: {

  },
  scoreHeader: {
    backgroundColor: grey[200],
    borderRadius: '4px 0 0 4px',
    padding: theme.spacing(3)
  },
  scoreBody: {
    padding: theme.spacing(3)
  }
}));

export function ScoreCard(props) {
  const classes = useStyles();

  return(
    <Paper className={classes.paperIndicator}>
      <Grid container>
        <Grid item xs={4} className={classes.scoreHeader}>
          <Typography variant="h5" color='secondary'>Opa</Typography>
        </Grid>
        <Grid item xs={8} className={classes.scoreBody}>
          <Typography variant="h5" color='secondary'>Opa</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}