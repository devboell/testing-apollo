/* eslint-disable react/prop-types */

import React, { Component } from 'react'
import { MockedProvider } from 'react-apollo/test-utils'

import { withPersons, PERSONS_QUERY } from '../enhancers'

it('withPersons', (done) => {
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

  class Dummy extends Component {
    componentDidMount() {
      const { loading, persons } = this.props.data
      expect(loading).toBe(true)
      expect(persons).toBe(undefined)
    }

    componentWillReceiveProps(nextProps) {
      const { loading, persons } = nextProps.data

      expect(loading).toBe(false)
      expect(persons).toEqual(mockedData.persons)
      done()
    }

    render() {
      return null
    }
  }
  const DummyWithPersons = withPersons(Dummy)
  mount(
    <MockedProvider
      removeTypename
      mocks={[
        {
          request: { query: PERSONS_QUERY, variables },
          result: { data: mockedData } },
      ]}
    >
      <DummyWithPersons />
    </MockedProvider>,
  )
})
