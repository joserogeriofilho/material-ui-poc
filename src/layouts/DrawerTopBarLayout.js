import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles'
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavigationDrawer from '../components/NavigationDrawer'


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
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton onClick={this.mobileMenuOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="h6" className={classes.title}>
                                {this.props.title}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Hidden>
                
                {this.props.children}
            </div>
        </div>
        );
    }
}

export default withRouter(withStyles(styles, {withTheme:true})(DrawerTopBarLayout));