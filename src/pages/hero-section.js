import React, { useState } from 'react'
import Layout from '../components/hero-section/layout'
import CallToAction from '../components/hero-section/call-to-action'
import ImageSection from '../components/hero-section/image-section'
import Navbar from '../components/hero-section/navbar'
import SkewedShape from '../components/hero-section/skewed-container'
import MobileNav from '../components/hero-section/mobile-navbar'
import TextBody from '../components/text-body'
import styles from '../styles/hero-section/call-to-action.module.css'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/hero-section/theme-button'
import SEO from '../components/seo'
import HeroSectionImage from '../components/hero-section/hero-section-image'

const HeroSection = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Layout>
      <SEO title="Hero section with angled image on right" />
      <SkewedShape />
      <CallToAction>
        <Navbar onClick={() => setNavOpen(true)} />
        <MobileNav navOpen={navOpen} onClick={() => setNavOpen(false)} />
        <div>
          <div className={styles.textArea}>
            <TextTitle>Data to enrich your</TextTitle>
            <TextTitle>online business</TextTitle>
          </div>
          <TextBody className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            congue quis mauris quis tincidunt. Pellentesque condimentum justo et
            maximus auctor.
          </TextBody>
          <div className={styles.buttons}>
            <ThemeButton className={styles.dark} aria-label="Get Started">
              Get Started
            </ThemeButton>
            <ThemeButton className={styles.light} aria-label="Live Demo">
              Live Demo
            </ThemeButton>
          </div>
        </div>
      </CallToAction>
      <ImageSection>
        <HeroSectionImage />
      </ImageSection>
    </Layout>
  )
}

export default HeroSection
