import NProgress from 'nprogress'

const applyAfterware = ({ response }, next) => {
  NProgress.done()
  next()
}

export default applyAfterware
