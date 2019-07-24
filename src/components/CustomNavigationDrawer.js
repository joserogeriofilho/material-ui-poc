import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Link as MaterialLink } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import withStyles from '@material-ui/styles/withStyles';


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
    visibleDrawer: {
        backgroundColor: 'red'
    }
});


export class CustomNavigationDrawer extends Component {

    render(){
        const { classes } = this.props;

        return(
        <React.Fragment>
            <Hidden smUp implementation="css">
                <SwipeableDrawer
                anchor="left"
                open={this.props.openDrawer}
                onClose={this.props.mobileMenuClose}
                onOpen={this.props.mobileMenuOpen}>
                    <List>
                        {Menu.map((item, index) => (
                            <ListItem component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.external ? null : {pathname: item.pathname, search: this.props.location.search}} button key={item.label}>
                            <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </Hidden>

            <Hidden xsDown implementation="css">
                <Drawer
                anchor="left"
                variant="permanent">
                    <List>
                        {Menu.map((item, index) => (
                            <ListItem component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.external ? null : {pathname: item.pathname, search: this.props.location.search}} button key={item.label}>
                            <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Hidden>
        </React.Fragment>
        );
    }
}

export default withStyles(styles)(CustomNavigationDrawer);