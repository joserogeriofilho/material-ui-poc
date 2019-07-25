import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import { Link as MaterialLink } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';


const Menu = [
    {
        label: "Home",
        pathname: "/page1"
    },
    {
        label: "User Registration",
        pathname: "/page2"
    },
    {
        label: "Card Grid",
        pathname: "/page3"
    }
];

const styles = theme => ({
    height100: {
        height: '100%'
    },
    wrapper: {
        display: 'flex',
        height: '100%'
      },
    content: {
        width: '100%',
    },
    drawerPaper: {
      position: 'static',
      width: '240px'
    },
    drawerHeader: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: '24px'
    },
    drawerTitle: {
        lineHeight: '120%'
    }
  });


export class DrawerTopBarLayout extends Component {

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
            <div>
                <Hidden className={classes.height100} xsDown implementation="css">
                    <Drawer
                    anchor="left"
                    variant="permanent"
                    classes={{paper: classes.drawerPaper, docked: classes.height100}}>
                        <div className={classes.drawerHeader}>
                            <Typography variant="h6" className={classes.drawerTitle}>
                                Material-UI<br/>Showcase
                            </Typography>
                        </div>

                        <List>
                            {Menu.map((item, index) => (
                                <ListItem
                                    component={item.external ? MaterialLink : Link}
                                    href={item.external ? item.pathname : null}
                                    to={item.external ? null : {pathname: item.pathname, search: this.props.location.search}}
                                    button key={item.label}>
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Hidden>

                <Hidden smUp implementation="css">
                    <SwipeableDrawer anchor="left" variant="temporary"
                    open={this.state.menuDrawer}
                    onClose={this.mobileMenuClose}
                    onOpen={this.mobileMenuOpen}
                    classes={{paper: classes.drawerPaper, docked: classes.height100}}>
                        <div className={classes.drawerHeader}>
                            <Typography variant="h6" className={classes.title}>
                                Material-UI<br/>Showcase
                            </Typography>
                        </div>

                        <List>
                            {Menu.map((item, index) => (
                                <ListItem
                                    component={item.external ? MaterialLink : Link}
                                    href={item.external ? item.pathname : null}
                                    to={item.external ? null : {pathname: item.pathname, search: this.props.location.search}}
                                    button key={item.label}>
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            ))}
                        </List>
                    </SwipeableDrawer>
                </Hidden>
            </div>

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