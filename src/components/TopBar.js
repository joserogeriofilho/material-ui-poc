import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
  root: {
    maxHeight: '60px'
  },
  linkButton: {
    color: 'white'
  }
}));

export function TopBar(props) {
  const classes = styles();

  const menuButton = (
    <IconButton
      onClick={props.mobileMenuOpen}
      edge="start"
      color="inherit"
      aria-label="Menu">
      <Icon>menu</Icon>
    </IconButton>
  );

  const returnButton = (
    <IconButton
      href={props.returnTo}
      className={classes.linkButton}
      edge="start"
      aria-label="Return">
      <Icon>arrow_back</Icon>
    </IconButton>
  );

  return(
    <AppBar position="relative" className={classes.root}>
      <Toolbar>
        {typeof props.returnTo === 'undefined' ? menuButton : returnButton}

        <Typography variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}