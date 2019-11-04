import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Link as MaterialLink } from '@material-ui/core'
import { ButtonBase , Divider, Drawer, Hidden, Icon, List, ListItem, ListItemIcon, ListItemText, Menu, SwipeableDrawer, Typography, MenuItem} from '@material-ui/core'
import withStyles from '@material-ui/styles/withStyles'
import { logout } from '../Auth'


const MENU_ITEMS = [
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
    label: "Child Routes",
    pathname: "/childRoutes",
    icon: "view_compact"
  }
];

const styles = theme => ({
  spacing: {
    padding: theme.spacing(2)
  },
  height100: {
    height: '100%'
  },
  drawerPaper: {
    position: 'static',
    width: '240px',
    justifyContent: 'space-between'
  },
  drawerHeader: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '128px',
    padding: '20px'
  },
  drawerTitle: {
    lineHeight: '125%',
    fontSize: '0.875rem',
    fontWeight: 500
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1'
  },
  userName: {
    fontSize: '14px',
    fontWeight: '400'
  },
  userEmail: {
    fontSize: '12px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: '0.55'
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
  },
  logoutItemMenu: {
    color: theme.palette.secondary.main
  }
});


export function NavigationDrawer(props){
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openUserMenu = event => {
    console.log(event);
    
    setAnchorEl(event.currentTarget);
  };

  const closeUserMenu = () => {
    setAnchorEl(null);
  };

  const isChildPath = (itemPathname, currentPathname) => {
    if(itemPathname !== '/') {
      if(currentPathname.startsWith(itemPathname)) {
        return true;
      } else {
        return false;
      }
    } else {
      if(currentPathname === '/') {
        return true;
      } else {
        return false;
      }
    }
  }

  const drawer = (
    <React.Fragment>
      <div>
        <div className={classes.drawerHeader}>
          <Typography variant="h6" className={classes.drawerTitle}>
            MATERIAL-UI SHOWCASE
          </Typography>
          <div className={classes.userInfo}>
            <span className={classes.userName}>John Doe</span>
            <ButtonBase className={classes.userEmail} onClick={openUserMenu}>
              <span>john.doe@somemail.com</span>
              <Icon>arrow_drop_down</Icon>
            </ButtonBase>
          </div>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={closeUserMenu}
          >
            <div className={classes.spacing}>
              <span className={classes.userName}>John Doe</span>
              <span className={classes.userEmail}>john.doe@somemail.com</span>
            </div>
            <Divider />
            <MenuItem onClick={closeUserMenu} dense>Lorem ipsum</MenuItem>
            <MenuItem onClick={closeUserMenu} dense>Et dolorem</MenuItem>
            <MenuItem onClick={logout} dense className={classes.logoutItemMenu}>Logout</MenuItem>
          </Menu>
        </div>

        <List>
          {MENU_ITEMS.map((item, index) => (
            <ListItem
              component={item.external ? MaterialLink : Link}
              href={item.external ? item.pathname : null}
              to={item.external ? null : {pathname: item.pathname, search: props.location.search}}
              selected={ isChildPath(item.pathname, props.location.pathname) }
              classes = {{ root: classes.itemRoot, selected: classes.selectedItem }}
              button
              onClick={props.mobileMenuClose}
              key={item.label}>
              <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
              <ListItemText primary={item.label} classes={{primary: classes.item}} />
            </ListItem>
          ))}
        </List>
      </div>
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
        <SwipeableDrawer
          anchor="left"
          variant="temporary"
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

export default
withRouter(
  withStyles(
    styles,
    {withTheme:true}
  )( NavigationDrawer )
);