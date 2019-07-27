import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles'
import Hidden from '@material-ui/core/Hidden'
import NavigationDrawer from '../components/NavigationDrawer'
import { TopBar } from '../components/TopBar'


const styles = theme => ({
    wrapper: {
        display: 'flex',
        height: '100%'
      },
    content: {
        width: '100%',
    }
});


class DrawerTopBarLayout extends Component {

    state = {
        menuDrawer: false
    };
    
    mobileMenuOpen = (event) => {
        this.setState({ menuDrawer: true });
    }
    
    mobileMenuClose = (event) => {
        this.setState({ menuDrawer: false });
    }

    render(){
        const { classes } = this.props;

        return(
        <div className={classes.wrapper}>
            <NavigationDrawer
                menuDrawer={this.state.menuDrawer}
                mobileMenuOpen={this.mobileMenuOpen}
                mobileMenuClose={this.mobileMenuClose} />

            <div className={classes.content}>
                <Hidden smUp implementation="css">
                    <TopBar mobileMenuOpen={this.mobileMenuOpen} title={this.props.title} />
                </Hidden>
                
                {this.props.children}
            </div>
        </div>
        );
    }
}

export default withRouter(withStyles(styles, {withTheme:true})(DrawerTopBarLayout));