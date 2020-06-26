import React from 'react'
import renderer from 'react-test-renderer'

import GitHub from '../icons/github'

describe('GitHub', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GitHub />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
