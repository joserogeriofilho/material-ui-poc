import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'
import NavigationDrawer from '../components/NavigationDrawer'
import { TopBar } from '../components/TopBar'
import { openNavDrawer, closeNavDrawer }      from '../redux/actions'
import { connect }              from 'react-redux'


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
  
  mobileMenuOpen = (event) => {
    this.props.openNavDrawer();
  }
  
  mobileMenuClose = (event) => {
    this.props.closeNavDrawer();
  }

  render(){
    const { classes } = this.props;

    return(
      <div className={classes.outsideWrapper}>
        <NavigationDrawer
          menuDrawer={this.props.navDrawer}
          mobileMenuOpen={this.mobileMenuOpen}
          mobileMenuClose={this.mobileMenuClose} />

        <div className={classes.insideWrapper}>
          <Hidden mdUp implementation="css">
            <TopBar
              returnTo={this.props.returnTo}
              title={this.props.title}
              mobileMenuOpen={this.mobileMenuOpen}/>
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

const mapStateToProps = state => ({
  navDrawer: state.navDrawerReducer
})

export default
withRouter(
  connect(
    mapStateToProps,
    { openNavDrawer, closeNavDrawer }
  )(
    withStyles(
      styles,
      {withTheme:true}
    ) (DrawerTopBarLayout)
  )
);