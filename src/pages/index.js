import React from 'react'
import TextBody from '../components/text-body'
import styles from '../styles/index.module.css'
import Navigator from '../components/navigator'
import TailwindUILogo from '../components/tailwind-ui-logo'
import SEO from '../components/seo'

export default function Index() {
  return (
    <div className={styles.index}>
      <SEO />
      <div className={styles.container}>
        <a
          href="https://tailwindui.com"
          title="Go to Tailwind UI
        "
        >
          <TailwindUILogo />
        </a>
        <TextBody>
          Welcome. Here is the list of the user interfaces I've re-designed from
          Tailwind UI for the purpose of practice
        </TextBody>
        <div className={styles.links}>
          <Navigator to="/dashboard" title="Brand sidebar with light header">
            Brand sidebar with light header
          </Navigator>
          <Navigator
            to="/hero-section"
            title="Hero section with angled image on right"
          >
            Hero section with angled image on right
          </Navigator>
          <Navigator
            to="/sign-in-split-screen"
            title="Split screen sign in page"
          >
            Split screen sign in page
          </Navigator>
          <Navigator
            to="/hero-section-2"
            title="Hero section with sign up and media content"
          >
            Hero Section with sign up and media content
          </Navigator>
        </div>
      </div>
    </div>
  )
}
