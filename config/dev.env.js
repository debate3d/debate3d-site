'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  URL_BASE: '"http://localhost:3000/"',
  NODE_ENV: '"development"'
})
