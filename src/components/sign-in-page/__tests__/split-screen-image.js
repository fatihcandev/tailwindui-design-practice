import React from 'react'
import renderer from 'react-test-renderer'
import { PureSplitScreenImage as SplitScreenImage } from '../split-screen-image'

describe('SplitScreenImage', () => {
  it('renders correctly', () => {
    const data = {
      file: {
        childImageSharp: {
          fluid: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/2gAMAwEAAhADEAAAAYPuJWcNEj//xAAaEAACAwEBAAAAAAAAAAAAAAABAgAEEQMy/9oACAEBAAEFAoi7DXba6g81GBPH/8QAGREAAgMBAAAAAAAAAAAAAAAAAAIBAxNB/9oACAEDAQE/AUr7Jkp//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/AbWv/8QAGhAAAwADAQAAAAAAAAAAAAAAAAERISIxYf/aAAgBAQAGPwIr4avA6ieiP//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAxQbH/2gAIAQEAAT8hhwtYPFwsBt7CQaF7if/aAAwDAQACAAMAAAAQrz//xAAYEQACAwAAAAAAAAAAAAAAAAAAAREhMf/aAAgBAwEBPxBFYEh//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERQf/aAAgBAgEBPxDGF3//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhQVH/2gAIAQEAAT8QjoC+Bq4azfUqYBN1pfISqBgq9exLZuT/2Q==',
            aspectRatio: 1.7699115044247788,
            src:
              '/static/368f6b6dfb83b0b5eb3d6a7030a14213/2f1b1/sign-in-page-image.jpg',
            srcSet:
              '/static/368f6b6dfb83b0b5eb3d6a7030a14213/fd013/sign-in-page-image.jpg 200w,\n/static/368f6b6dfb83b0b5eb3d6a7030a14213/25252/sign-in-page-image.jpg 400w,\n/static/368f6b6dfb83b0b5eb3d6a7030a14213/2f1b1/sign-in-page-image.jpg 800w,\n/static/368f6b6dfb83b0b5eb3d6a7030a14213/0ff54/sign-in-page-image.jpg 1200w,\n/static/368f6b6dfb83b0b5eb3d6a7030a14213/06655/sign-in-page-image.jpg 1600w,\n/static/368f6b6dfb83b0b5eb3d6a7030a14213/097fa/sign-in-page-image.jpg 1920w',
            sizes: '(max-width: 800px) 100vw, 800px'
          }
        }
      }
    }
    const tree = renderer.create(<SplitScreenImage data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
