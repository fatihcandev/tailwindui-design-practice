import React from 'react'
import renderer from 'react-test-renderer'

import SocialButton from '../social-button'

describe('SocialButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SocialButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
