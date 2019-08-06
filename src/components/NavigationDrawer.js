import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import { Link as MaterialLink } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';


const Menu = [
  {
    label: "Home",
    pathname: "/",
    icon: "home"
  },
  {
    label: "Users",
    pathname: "/users",
    icon: "person"
  },
  {
    label: "Card Grid",
    pathname: "/cardGrid",
    icon: "collections"
  },
  {
    label: "Teste",
    pathname: "/teste",
    icon: "star"
  }
];

const styles = theme => ({
    height100: {
        height: '100%'
    },
    drawerPaper: {
    position: 'static',
    width: '240px'
    },
    drawerHeader: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '128px',
        padding: '24px'
    },
    drawerTitle: {
        lineHeight: '125%',
        fontSize: '0.875rem',
        fontWeight: 500
    },
    item: {
        fontWeight: '500',
        fontSize: '14px'
    },
    selectedItem: {
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent !important',
        '& .MuiListItemIcon-root': {
            color: theme.palette.secondary.main
        }
    }
});


export function NavigationDrawer(props){

        const { classes } = props;

        const drawer = (
            <React.Fragment>
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
                            to={item.external ? null : {pathname: item.pathname, search: props.location.search}}
                            selected={props.location.pathname === item.pathname ? true : false}
                            classes = {{root: classes.itemRoot, selected: classes.selectedItem}}
                            button
                            key={item.label}>
                            <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
                            <ListItemText primary={item.label} classes={{primary: classes.item}} />
                        </ListItem>
                    ))}
                </List>
            </React.Fragment>
        );

        return(
            <React.Fragment>
                <Hidden className={classes.height100} smDown implementation="css">
                    <Drawer
                    anchor="left"
                    variant="permanent"
                    classes={{paper: classes.drawerPaper, docked: classes.height100}}>
                        {drawer}
                    </Drawer>
                </Hidden>

                <Hidden smUp implementation="css">
                    <SwipeableDrawer anchor="left" variant="temporary"
                        open={props.menuDrawer}
                        onOpen={props.mobileMenuOpen}
                        onClose={props.mobileMenuClose}
                        classes={{paper: classes.drawerPaper, docked: classes.height100}}>
                            {drawer}
                    </SwipeableDrawer>
                </Hidden>
            </React.Fragment>
        );
}

export default withRouter(withStyles(styles, {withTheme:true})(NavigationDrawer));