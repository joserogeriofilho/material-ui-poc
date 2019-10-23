import React from 'react';
import Dialog from '@material-ui/core/Dialog'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  scrim: {
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'hidden'
  }
}));

export function LoadingDialog({open}) {
  const classes = styles(); 

  return (
    <Dialog
      open={open}
      classes={{paper: classes.scrim}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description" >
        <CircularProgress color="secondary" />
    </Dialog>
  );
}