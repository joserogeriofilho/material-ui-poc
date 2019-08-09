import React from 'react'
import DrawerTopBarLayout from '../layouts/DrawerTopBarLayout'


function SingleUserPage(props) {
  const pageTitle = 'Single Page User';

  return(
    <DrawerTopBarLayout
      returnTo={'/teste'}
      title={pageTitle}>

      <span>Single User Page</span>
      <p>{props.location.state.user.firstName}</p>
      <p>{props.location.state.user.lastName}</p>
      <p>{props.location.state.user.userName}</p>
      <p>{props.location.state.user.email}</p>

    </DrawerTopBarLayout>
  );
}

export default SingleUserPage;