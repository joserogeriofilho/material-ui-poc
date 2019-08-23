function login(bearer) {
    localStorage.setItem('bearer', bearer);
}

function logout() {
    localStorage.setItem('bearer', '');
}