import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const HeroSectionImage = () => {
  const data = useStaticQuery(query)
  return <Img fluid={data.file.childImageSharp.fluid} alt="an architecture" />
}

export default HeroSectionImage

const query = graphql`
  query {
    file(relativePath: { eq: "hero-section-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
