import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'
import NavigationDrawer from '../components/NavigationDrawer'
import { TopBar } from '../components/TopBar'


const styles = theme => ({
    outsideWrapper: {
        display: 'flex',
        height: '100%',
        overflow: 'hidden'
    },
    insideWrapper: {
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    },
    content: {
        padding: theme.spacing(3, 0, 0, 0)
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
        <div className={classes.outsideWrapper}>
            <NavigationDrawer
                menuDrawer={this.state.menuDrawer}
                mobileMenuOpen={this.mobileMenuOpen}
                mobileMenuClose={this.mobileMenuClose} />

            <div className={classes.insideWrapper}>
                <Hidden mdUp implementation="css">
                    <TopBar mobileMenuOpen={this.mobileMenuOpen} title={this.props.title} />
                </Hidden>
                
                <div className={classes.content}>
                    <Container maxWidth={'lg'} className={classes.container}>
                        {this.props.children}
                    </Container>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(withStyles(styles, {withTheme:true})(DrawerTopBarLayout));