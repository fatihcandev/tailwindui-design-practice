import React from 'react'
import renderer from 'react-test-renderer'

import Facebook from '../icons/facebook'

describe('Facebook', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Facebook />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
