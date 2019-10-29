import React, { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import { AppBar, Container, Grid, Hidden, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { Route, Link } from 'react-router-dom'


const styles = theme => ({
  wrapper: {
    padding: theme.spacing(3, 0, 0, 0)
  },
  hidePaperxsDown: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: theme.spacing(0)
    }
  },
  mobileTabs: {
    top: 'auto',
    bottom: 0,
  },
  content: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0)
    }
  }
});

export function ChildRoutesPage({ classes, match }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const pageTitle = "Child Routes";

  const handleTabChange = (event, tab) => {
    setSelectedTab(tab);
  }
    
  return (
    <DrawerTopBarLayout title={pageTitle}>
      <Container >        
        <Grid className={classes.wrapper} container spacing={3}>
          <Hidden xsDown>
            <Grid item xs={12}>
              <Typography variant="h5" color='secondary'>
                {pageTitle}
              </Typography>
            </Grid>
          </Hidden>

          <Grid item xs={12}>
            <Paper className={classes.hidePaperxsDown}>
              <Hidden xsDown>
                <AppBar position="static">
                  <Tabs value={selectedTab} onChange={handleTabChange} aria-label="simple tabs example">
                    <Tab component={Link} to={`${match.url}/lol`} label="LOL"/>
                    <Tab component={Link} to={`${match.url}/lista`} label="LISTA"/>
                    <Tab component={Link} to={`${match.url}/texto`} label="TEXTO"/>
                    <Tab component={Link} to={`${match.url}/parametro/:someText`} label="PARAM"/>
                  </Tabs>
                </AppBar>
              </Hidden>
              <div className={classes.content}>
                <Route value={selectedTab} index={0} path={`${match.path}/lol`} component={ ComponenteLol } />
                <Route value={selectedTab} index={1} path={`${match.path}/lista`} component={ ComponenteLista } />
                <Route value={selectedTab} index={2} path={`${match.path}/texto`} component={ ComponenteTexto } />
                <Route value={selectedTab} index={3} path={`${match.path}/parametro/:someText`} component={ ComponenteParametro } />  
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Route
          exact
          path={`${match.path}/`}
          component={() => (
            <Redirect to={{pathname: `${match.path}/lol`}} />
          )} />
      </Container>

      <Hidden smUp>
        <AppBar className={classes.mobileTabs} position='fixed'>
          <Tabs value={selectedTab} onChange={handleTabChange} aria-label="simple tabs example">
            <Tab component={Link} to={`${match.url}/lol`} label="LOL"/>
            <Tab component={Link} to={`${match.url}/lista`} label="LISTA"/>
            <Tab component={Link} to={`${match.url}/texto`} label="TEXTO"/>
            <Tab component={Link} to={`${match.url}/parametro/:someText`} label="PARAM"/>
          </Tabs>
        </AppBar>
      </Hidden>
    </DrawerTopBarLayout>
  );

}

export default withRouter(withStyles(styles)(ChildRoutesPage));


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
    <div>
      <Typography variant="h6">
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography variant="subtitle2" color='primary'>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      </Typography>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie placerat massa eget sollicitudin. Aenean pharetra sem eget urna lacinia, ut gravida eros ornare. Aenean nec mi leo. Pellentesque velit diam, tristique in turpis rhoncus, euismod feugiat metus. Quisque id quam eu dolor hendrerit tincidunt vel non nibh. In scelerisque tempor pulvinar. Donec feugiat purus quis risus placerat ornare. Duis et felis non dolor pretium sagittis eget a justo. Aliquam consequat orci id scelerisque fringilla. Sed non justo nunc. Integer metus massa, tincidunt non vestibulum quis, molestie a lacus. Ut non maximus ante, et scelerisque ex. Aenean nec luctus arcu, sit amet dignissim nulla. Nunc vestibulum, quam in mollis vestibulum, dui urna scelerisque dolor, ac tincidunt elit tortor et lorem. Nam eu tortor quis elit tincidunt pellentesque. Pellentesque tempus non libero non porttitor.</p>

      <p>Nulla malesuada, purus a eleifend ornare, libero sapien pulvinar lacus, vel feugiat nunc lorem tincidunt elit. Etiam egestas magna quis egestas pretium. Nulla elementum, metus et suscipit cursus, turpis turpis egestas risus, ut aliquet neque purus sed lectus. Vivamus eu nisi quis libero tincidunt rhoncus eu at mauris. Quisque diam enim, placerat eget purus id, facilisis bibendum ante. Morbi faucibus suscipit malesuada. Aliquam erat volutpat.</p>

      <p>Pellentesque sed tempus nunc. Mauris molestie, elit nec laoreet aliquam, risus tortor elementum metus, a bibendum elit est ac nisi. Nunc ut massa a metus sollicitudin tristique. Nullam ut sem egestas, iaculis erat et, imperdiet justo. Curabitur consequat fringilla odio, ultrices sagittis velit pretium sed. Duis pharetra pharetra porttitor. Sed commodo est vel magna mattis dignissim vel eget ipsum. Vestibulum egestas risus eget ultricies hendrerit. Pellentesque non accumsan nunc.</p>
    </div>
  )
}

function ComponenteParametro({ match }) {
  return(
    <span>O ID entrado foi o: {match.params.someText}</span>
  )
}