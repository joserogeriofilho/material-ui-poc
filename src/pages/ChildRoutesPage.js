import React, { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import { AppBar, Container, Grid, Hidden, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { Route, Link } from 'react-router-dom'


const styles = theme => ({
  wrapper: {
    padding: theme.spacing(3)
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

  const tabs = (
    <Tabs variant="fullWidth" value={selectedTab} onChange={handleTabChange} aria-label="simple tabs example">
      <Tab component={Link} to={`${match.url}/first`} label="First"/>
      <Tab component={Link} to={`${match.url}/second`} label="Second"/>
      <Tab component={Link} to={`${match.url}/third`} label="Third"/>
    </Tabs>
  );
    
  return (
    <DrawerTopBarLayout title={pageTitle}>
      <Container className={classes.wrapper}>        
        <Grid container spacing={3}>
          <Hidden smDown>
            <Grid item xs={12}>
              <Typography variant="h5" color='secondary'>
                {pageTitle}
              </Typography>
            </Grid>
          </Hidden>

          <Grid item xs={12}>
            <Paper className={classes.hidePaperxsDown}>
              <Hidden smDown>
                <AppBar position="static">
                  {tabs}
                </AppBar>
              </Hidden>
              <div className={classes.content}>
                <Route value={selectedTab} index={0} path={`${match.path}/first`} component={FirstTab} />
                <Route value={selectedTab} index={1} path={`${match.path}/second`} component={SecondTab} />
                <Route value={selectedTab} index={2} path={`${match.path}/third`} component={ThirdTab} />
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Route
          exact
          path={`${match.path}/`}
          component={() => (
            <Redirect to={{pathname: `${match.path}/first`}} />
          )} />
      </Container>

      <Hidden mdUp>
        <AppBar className={classes.mobileTabs} position='fixed'>
          {tabs}
        </AppBar>
      </Hidden>
    </DrawerTopBarLayout>
  );

}

export default withRouter(withStyles(styles)(ChildRoutesPage));


function FirstTab() {
  return(
    <div>
      <Typography variant="h6">
        Lorem ipsum dolor sit amet
      </Typography>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id diam quis nisl pellentesque ornare. Praesent luctus fermentum risus, id molestie justo accumsan et. Morbi bibendum quis ex in aliquet. Proin sit amet lorem nec mauris ornare tincidunt eget a diam. Duis mi neque, lobortis vel magna ac, condimentum tristique ipsum. Phasellus interdum tempor sem. Maecenas erat risus, consectetur ac malesuada id, rutrum eget libero. Phasellus mattis varius orci, ac tempus erat maximus vel. Suspendisse pharetra enim lacinia sapien tempus dignissim. Etiam vestibulum consequat porttitor. Praesent ac lacinia lectus. Vivamus eu posuere leo. Pellentesque hendrerit blandit sodales. Aliquam elementum, nibh quis finibus vulputate, mi purus ultricies nibh, eu tempus erat arcu nec turpis.</p>
    </div>
  )
}

function SecondTab() {
  return(
    <div>
      <Typography variant="h6">
        Class aptent taciti sociosqu ad
      </Typography>
      <Typography variant="subtitle2" color='primary'>
        Litora torquent per conubia nostra, per inceptos himenaeos.
      </Typography>
      <p>Morbi pellentesque leo eget sapien eleifend, id finibus mi laoreet. Phasellus ac tellus quis justo pharetra viverra nec vel ex. In ut fermentum arcu, sed congue purus. Etiam in suscipit purus. Nullam consequat diam quis consequat cursus. Aenean mattis id mauris at molestie. Aliquam ut molestie sapien. Maecenas placerat sem non tellus aliquam, a mollis mi mollis. Nam varius placerat mi, ut tincidunt lacus sodales at. Nulla vehicula nulla in tellus efficitur commodo. Integer vitae eros faucibus, laoreet mauris a, facilisis risus. Ut sodales ac ex consequat tempor. Fusce rhoncus dictum risus nec faucibus. Proin pharetra sapien sapien, vitae interdum ipsum faucibus at. Praesent ultricies mauris eget lectus tincidunt, ac viverra tellus fermentum.</p>
    </div>
  )
}

function ThirdTab() {
  return(
    <div>
      <Typography variant="h6">
        Morbi in risus lacinia ante dignissim dictum
      </Typography>
      <Typography variant="subtitle2" color='primary'>
        "Cras non arcu eu tellus molestie tincidunt vitae id purus."
      </Typography>
      <p>Phasellus imperdiet sit amet neque vitae lacinia. Aenean mi arcu, posuere vitae libero vitae, porttitor sollicitudin leo. Vivamus sit amet purus viverra, scelerisque mauris non, dignissim elit. Mauris porta purus eu mattis tempus. Vivamus at condimentum lorem. Vivamus ornare diam nisl, quis consectetur lectus molestie in. Vivamus congue ante at sapien blandit pretium. Pellentesque tincidunt tincidunt dui in ornare. Aenean tempus, massa quis tristique pharetra, massa est interdum tellus, vitae rutrum risus nibh et elit. Cras tempor purus dui, sit amet bibendum justo viverra sit amet.</p>
    </div>
  )
}

function FourthTab({ match }) {
  return(
    <div>
      <Typography variant="h6">
        Change the parameter in the URL: {match.params.someText}
      </Typography>
      <p>Sed laoreet ut lorem eget ullamcorper. Fusce euismod massa sagittis felis consequat vulputate. Nullam porta lacinia suscipit. Nulla dignissim, lectus ac mattis interdum, mi nibh viverra nisl, sed elementum metus dui non neque. Cras imperdiet feugiat eleifend. Nullam ac mi elit. Integer ac ultrices leo, nec commodo libero. Vestibulum sed nisi eu tortor tempor placerat. Donec gravida dolor id orci laoreet vulputate. Proin interdum magna vitae sapien condimentum, eget semper est posuere. Donec ornare egestas mattis.</p>
    </div>
  )
}