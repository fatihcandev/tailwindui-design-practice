import React from 'react'
import renderer from 'react-test-renderer'

import SignInButton from '../sign-in-button'

describe('SignInButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SignInButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
