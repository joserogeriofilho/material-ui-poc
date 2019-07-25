import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from '@material-ui/styles/withStyles';
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
    
});


export class Page3 extends Component {

    render(){
        const { classes } = this.props;
        const pageTitle = "Card Grid";
        
        return (
            <DrawerTopBarLayout title={pageTitle}>

            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Hidden xsDown implementation="css">
                    <Typography variant="h5">
                      {pageTitle}
                    </Typography>
                  </Hidden>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam varius felis sed pulvinar. Quisque luctus lacus mi, in gravida felis iaculis vel. Donec blandit dapibus tempus. Nam pulvinar placerat iaculis. In viverra eu urna interdum molestie. Cras mollis orci vitae sollicitudin imperdiet. Nulla fringilla sollicitudin odio, bibendum imperdiet purus consequat convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                  <p>Nunc finibus odio nec luctus interdum. Suspendisse potenti. Ut tincidunt orci libero, id efficitur tellus commodo eget. Integer vitae porttitor tortor. Proin tincidunt ante sagittis dignissim tempor. Cras mollis tortor et dapibus consequat. Duis quis ipsum at elit gravida mattis eget congue mauris.</p>
                </Grid>
              </Grid>
            </Container>

            </DrawerTopBarLayout>
        );
    }

}

export default withRouter(withStyles(styles)(Page3));