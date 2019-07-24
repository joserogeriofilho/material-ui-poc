import React, { Component } from 'react'
import CustomNavigationDrawer from '../components/CustomNavigationDrawer'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';


const styles = theme => ({
    wrapper: {
      display: 'flex',
      height: '100%'
    },
    navDrawer: {
      height: '100%'
    },
    content: {
      backgroundColor: '#fff',
      width: '100%',
      height: '100%'
    }
  });


export class Page1 extends Component {

    state = {
        openDrawer: false
      };
    
      mobileMenuOpen = (event) => {
        this.setState({ openDrawer: true });
      }
    
      mobileMenuClose = (event) => {
        this.setState({ openDrawer: false });
      }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
            <div className={classes.navDrawer}>
              <CustomNavigationDrawer />
            </div>
            <div className={classes.content}>
              This is page 1
            </div>
          </div>
        );
    }

}

export default withRouter(withStyles(styles)(Page1));