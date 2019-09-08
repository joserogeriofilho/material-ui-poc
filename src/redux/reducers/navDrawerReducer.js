const navDrawerReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_NAV_DRAWER':
      return true;
    case 'CLOSE_NAV_DRAWER':
      return false;
    case 'GET_NAV_DRAWER':
      return state
    default:
      return state
  }
}

export default navDrawerReducer