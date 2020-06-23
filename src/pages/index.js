import React from 'react'
import TextBody from '../components/text-body'
import styles from '../styles/index.module.css'
import Navigator from '../components/navigator'
import TailwindUILogo from '../components/tailwind-ui-logo'

export default function Index() {
  return (
    <div className={styles.index}>
      <div className={styles.container}>
        <a href="https://tailwindui.com" title="Go to Tailwind UI">
          <TailwindUILogo />
        </a>
        <TextBody>
          Welcome. Here is the list of the user interfaces I've re-designed from
          Tailwind UI for the purpose of practice
        </TextBody>
        <div className={styles.links}>
          <Navigator to="/dashboard">Brand sidebar with light header</Navigator>
          <Navigator to="/hero-section">Hero section</Navigator>
        </div>
      </div>
    </div>
  )
}
