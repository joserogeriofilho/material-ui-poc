import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import { Link as MaterialLink } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const Menu = [
    {
        label: "Home",
        pathname: "/page1"
    },
    {
        label: "User",
        pathname: "/page2"
    },
    {
        label: "Account",
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
        width: '100%'
    },
    drawerPaper: {
      position: 'static',
      width: '240px'
    }
  });


export class DrawerTopBarLayout extends Component {

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

        return(

        <div className={classes.wrapper}>
            <div>
                <Hidden className={classes.height100} xsDown implementation="css">
                    <Drawer
                    anchor="left"
                    variant="permanent"
                    classes={{paper: classes.drawerPaper, docked: classes.height100}}>
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
                    <Drawer
                    anchor="left"
                    variant="temporary"
                    open={false}>
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
            </div>

            <div className={classes.content}>
                <Hidden smUp implementation="css">
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
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

export default withRouter(withStyles(styles)(DrawerTopBarLayout));