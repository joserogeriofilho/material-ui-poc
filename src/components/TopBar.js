import React from 'react'
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
  linkButton: {
    color: 'white',
    textDecoration: 'none'
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
    <Link href={props.returnTo}>
      <IconButton
        className={classes.linkButton}
        edge="start"
        aria-label="Return">
        <Icon>arrow_back</Icon>
      </IconButton>
    </Link>
  );

  return(
    <AppBar position="static">
      <Toolbar>
        {typeof props.returnTo === 'undefined' ? menuButton : returnButton}

        <Typography variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}