import { gql, graphql } from 'react-apollo'

export const PERSONS_QUERY = gql`
  query personsQuery {
    persons {
      name
      city
    }
  }
`

export const withPersons = graphql(PERSONS_QUERY)
