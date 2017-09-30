export default function () {
  const user = window.localStorage.getItem('user')
  if (user) return JSON.parse(window.localStorage.getItem('user'))
  return null
}
