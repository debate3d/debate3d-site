import { path } from 'ramda'

import graphqlClient from '../../../services/apollo/apollo-client'
import userDataQuery from './querys/me.gql'

/**
 * Query for me type on Graphql
 * @return {Object} Response from back end
 */
export default () => {
  const options = {
    query: userDataQuery,
    fetchPolicy: 'network-only'
  }

  return graphqlClient.query(options)
    .then(path(['data', 'me']))
    .catch(error => {
      console.error(error)
      return Promise.reject(error)
    })
}
