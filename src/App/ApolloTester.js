import React, { Component } from 'react'
import { MockedProvider } from 'react-apollo/test-utils'


export default (mocks, withData, didMount, willReceive) => {
  class Container extends Component {
    componentDidMount() {
      try {
        didMount(this.props)
      } catch (e) {
        console.log('error: didMount', e)
      }
    }

    componentWillReceiveProps(nextProps) {
      try {
        willReceive(nextProps)
      } catch (e) {
        console.log('error: willReceive', e)
      }
    }

    render() {
      return null
    }
  }

  const ContainerWithData = withData(Container)

  return (
    <MockedProvider
      removeTypename
      mocks={mocks}
    >
      <ContainerWithData />
    </MockedProvider>
  )
}
