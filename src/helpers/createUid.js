export default (string) =>
  string.split(' ').map(item => item.toLowerCase()).join('-')
