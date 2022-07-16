import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5mrbsxq0dlu01ulczss4br9/master',
  cache: new InMemoryCache()
})
