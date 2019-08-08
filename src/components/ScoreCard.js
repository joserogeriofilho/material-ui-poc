import React          from 'react'
import Card          from '@material-ui/core/Card'
import Grid           from '@material-ui/core/Grid'
import Hidden           from '@material-ui/core/Hidden'
import Icon           from '@material-ui/core/Icon';
import Typography     from '@material-ui/core/Typography'
import grey           from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
    '& .MuiGrid-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  scoreHeader: {
    backgroundColor: grey[100],
    borderRadius: '4px 0 0 4px',
    color: grey[500],
    height: '100%',
    padding: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(2),
    }
  },
  scoreIcon: {
    fontSize: '2.25rem'
  },
  scoreBody: {
    flexDirection: 'column',
    padding: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(2),
    }
  },
  scoreNumber: {
    fontSize: '2.25rem',
    fontWeight: '300',
    marginTop: '-8px',
  },
  scoreLabel: {
    fontSize: '1rem',
    fontWeight: '500',
    marginTop: '-4px',
    textAlign: 'center'
  }
}));

export function ScoreCard(props) {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <Grid container>
        <Hidden smDown>
          <Grid item xs={0} md={4} className={classes.scoreHeader}>
            <Icon className={classes.scoreIcon}>{props.icon}</Icon>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={8} className={classes.scoreBody}>
          <Typography color='secondary' className={classes.scoreNumber}>{props.value}</Typography>
          <Typography className={classes.scoreLabel}>{props.label}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}