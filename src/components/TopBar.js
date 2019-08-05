import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


export function TopBar(props) {
  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={props.mobileMenuOpen} edge="start"color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}