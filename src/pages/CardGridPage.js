import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
  paddingTop: {
    paddingTop: '24px'
  },
});


export class CardGridPage extends Component {

    render(){
        const { classes } = this.props;
        const pageTitle = "Card Grid";
        
        return (
            <DrawerTopBarLayout title={pageTitle}>
              <Grid container spacing={3}>

                <Hidden xsDown>
                  <Grid item xs={12}>
                    <Typography variant="h5" color='secondary'>
                      {pageTitle}
                    </Typography>
                  </Grid>
                </Hidden>

              </Grid>
            </DrawerTopBarLayout>
        );
    }

}

export default withRouter(withStyles(styles)(CardGridPage));