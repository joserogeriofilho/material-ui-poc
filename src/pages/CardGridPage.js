import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import { AppBar, Grid, Hidden, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { Route, Link } from 'react-router-dom'


const styles = theme => ({

});

export function CardGridPage({ classes, match }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const pageTitle = "Card Grid";

  const handleTabChange = (event, tab) => {
    setSelectedTab(tab);
  }
    
  return (
    <DrawerTopBarLayout title={pageTitle}>
      <Grid container spacing={3}>

        <Hidden xsDown>
          <Grid item xs={12}>
            <Typography variant="h5" color='secondary'>
              {pageTitle}
            </Typography>
          </Grid>
        </Hidden>

        <Grid item xs={12}>
          <Paper>
            <AppBar position="static">
              <Tabs value={selectedTab} onChange={handleTabChange} aria-label="simple tabs example">
                <Tab component={Link} to={`${match.url}/lol`} label="LOL"/>
                <Tab component={Link} to={`${match.url}/lista`} label="LISTA"/>
                <Tab component={Link} to={`${match.url}/texto`} label="TEXTO"/>
                <Tab component={Link} to={`${match.url}/parametro/:someText`} label="PARAM"/>
              </Tabs>
            </AppBar>
            <Route value={selectedTab} index={0} path={`${match.path}/lol`} component={ ComponenteLol } />
            <Route value={selectedTab} index={1} path={`${match.path}/lista`} component={ ComponenteLista } />
            <Route value={selectedTab} index={2} path={`${match.path}/texto`} component={ ComponenteTexto } />
            <Route value={selectedTab} index={3} path={`${match.path}/parametro/:someText`} component={ ComponenteParametro } />
          </Paper>
        </Grid>
      </Grid>
    </DrawerTopBarLayout>
  );

}

export default withRouter(withStyles(styles)(CardGridPage));

function ComponenteLol() {
  return(
    <div>component lol</div>
  )
}

function ComponenteLista() {
  return(
    <ul>
      <li>Bola</li>
      <li>Macaco</li>
      <li>Laranja</li>
    </ul>
  )
}

function ComponenteTexto() {
  return(
    <span>
      Lorem ipsum et dolorem mac.
    </span>
  )
}

function ComponenteParametro({ match }) {
  return(
    <span>O ID entrado foi o: {match.params.someText}</span>
  )
}