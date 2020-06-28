import React, { useState } from 'react'
import Layout from '../components/hero-section-2/layout'
import SEO from '../components/seo'
import Navbar from '../components/hero-section-2/navbar'
import Main from '../components/hero-section-2/main'
import MobileNav from '../components/hero-section-2/mobile-nav'

const SecondHeroSection = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Layout>
      <SEO title="Hero section with sign up and media content" />
      {navOpen && <MobileNav onNavClose={() => setNavOpen(false)} />}
      <Navbar onNavOpen={() => setNavOpen(true)} />
      <Main />
    </Layout>
  )
}

export default SecondHeroSection
