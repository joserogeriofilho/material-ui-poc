function login(bearer) {
  localStorage.setItem('Bearer', bearer);
}

function logout() {
  localStorage.setItem('Bearer', '');
  document.location.href = "";
}

function getAccessToken() {
  return localStorage.getItem('Bearer');
}

export { login, logout, getAccessToken }