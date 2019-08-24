function login(bearer) {
  localStorage.setItem('bearer', bearer);
}

function logout() {
  localStorage.setItem('bearer', '');
}

function getAccessToken() {
  return localStorage.getItem('bearer');
}

export { login, logout, getAccessToken }