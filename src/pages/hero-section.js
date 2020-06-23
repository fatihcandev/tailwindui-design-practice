import React, { useState } from 'react'
import Layout from '../components/hero-section/layout'
import CallToAction from '../components/hero-section/call-to-action'
import ImageSection from '../components/hero-section/image-section'
import Image from '../components/image'
import { graphql } from 'gatsby'
import Navbar from '../components/hero-section/navbar'
import SkewedShape from '../components/hero-section/skewed-container'
import MobileNav from '../components/hero-section/mobile-navbar'

const HeroSection = ({ data }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Layout>
      <SkewedShape />
      <CallToAction>
        <Navbar onClick={() => setNavOpen(true)} />
        <MobileNav navOpen={navOpen} onClick={() => setNavOpen(false)} />
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
