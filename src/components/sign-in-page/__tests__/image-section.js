import React from 'react'
import renderer from 'react-test-renderer'

import ImageSection from '../image-section'

describe('ImageSection', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ImageSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
