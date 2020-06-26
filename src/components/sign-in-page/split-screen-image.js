import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export const PureSplitScreenImage = ({ data }) => (
  <Img fluid={data.file.childImageSharp.fluid} alt="an architecture" />
)

export const SplitScreenImage = props => {
  const data = useStaticQuery(query)

  return <PureSplitScreenImage {...props} data={data} />
}

export default SplitScreenImage

const query = graphql`
  query {
    file(relativePath: { eq: "sign-in-page-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
