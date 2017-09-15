// import React from 'react'
import apolloTester from '../ApolloTester'
import { withPersons, PERSONS_QUERY } from '../enhancers'


it('withPersons 2', (done) => {
  const mockedData = {
    persons: [
      {
        name: 'John',
        city: 'Liverpool',
      },
      {
        name: 'Frank',
        city: 'San Diego',
      },
    ],
  }

  const variables = { cache: false }
  const mocks = [
    {
      request: { query: PERSONS_QUERY, variables },
      result: { data: mockedData },
    },
  ]

  const didMount = ({ data: { loading, persons } }) => {
    expect(loading).toBe(true)
    expect(persons).toBe(undefined)
  }

  const willReceive = ({ data: { loading, persons } }) => {
    expect(loading).toBe(false)
    expect(persons).toEqual(mockedData.persons)
    done()
  }

  const Tester = apolloTester(mocks, withPersons, didMount, willReceive)
  mount(Tester)
})
