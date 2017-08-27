import graphqlClient from '../../../services/apollo/apollo-client'
import userDataQuery from './querys/me.gql'

/**
 * Query for me type on Graphql
 * @return {Object} Response from back end
 */
export default () => graphqlClient.query({ query: userDataQuery })
  .then(result => Promise.resolve(result))
  .catch(error => {
    console.error(error)
    return Promise.reject(error)
  })
