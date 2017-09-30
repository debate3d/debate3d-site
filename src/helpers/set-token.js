export default token => {
  window.localStorage.setItem('token', JSON.stringify(token))
}
