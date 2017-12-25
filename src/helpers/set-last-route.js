export default route => {
  return new Promise((resolve, reject) => {
    window.localStorage.setItem('last_route', route)
    return resolve()
  })
}
