import graphqlClient from '../../../services/apollo/apollo-client'
import userDataQuery from './querys/me.gql'

export const queryMe = () => graphqlClient.query({ query: userDataQuery })
