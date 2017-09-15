import React from 'react'

import App from '../index'

test('App component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
