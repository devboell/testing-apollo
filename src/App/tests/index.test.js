import React from 'react'

import App from '../index'

test('App component', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('div').at(1).text()).toBe('React')
  expect(wrapper).toMatchSnapshot()
})
