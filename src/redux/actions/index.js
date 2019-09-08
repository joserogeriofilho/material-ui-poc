export function openNavDrawer() {
  return { type: 'OPEN_NAV_DRAWER' }
}

export function closeNavDrawer() {
  return { type: 'CLOSE_NAV_DRAWER' }
}

export function getNavDrawer() {
  return { type: 'GET_NAV_DRAWER' }
}

export const navDrawerActions = {
  OPEN_NAV_DRAWER: 'OPEN_NAV_DRAWER',
  CLOSE_NAV_DRAWER: 'CLOSE_NAV_DRAWER',
  GET_NAV_DRAWER: 'GET_NAV_DRAWER'
}