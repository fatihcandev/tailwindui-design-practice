import React from 'react'
import Layout from '../components/hero-section/layout'
import CallToAction from '../components/hero-section/call-to-action'
import ImageSection from '../components/hero-section/image-section'
import Image from '../components/image'
import { graphql } from 'gatsby'
import Navbar from '../components/hero-section/navbar'

const HeroSection = ({ data }) => {
  return (
    <Layout>
      <CallToAction>
        <Navbar />
      </CallToAction>
      <ImageSection>
        <Image img={data.file.childImageSharp.fluid} />
      </ImageSection>
    </Layout>
  )
}

export default HeroSection

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "hero-section-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
