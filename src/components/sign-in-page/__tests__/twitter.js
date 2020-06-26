import React from 'react'
import renderer from 'react-test-renderer'

import Twitter from '../icons/twitter'

describe('Twitter', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Twitter />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
