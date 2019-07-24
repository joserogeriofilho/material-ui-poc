import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import { Link as MaterialLink } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';


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
    drawerPaper: {
      position: 'static'
    }
  });


export class CustomNavigationDrawer extends Component {

    render(){
        const { classes } = this.props;

        return(
        <React.Fragment>
            <Hidden xsDown implementation="css">
                <Drawer
                anchor="left"
                variant="permanent"
                classes={{paper: classes.drawerPaper}}>
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
        </React.Fragment>
        );
    }
}

export default withRouter(withStyles(styles)(CustomNavigationDrawer));