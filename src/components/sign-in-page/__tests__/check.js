import React from 'react'
import renderer from 'react-test-renderer'

import Check from '../icons/check'

describe('Check', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Check />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
