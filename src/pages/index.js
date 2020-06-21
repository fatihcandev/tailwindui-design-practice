import React from 'react'
import TextBody from '../components/dashboard/text-body'
import { Link } from 'gatsby'
import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <div className={styles.index}>
      <TextBody>Welcome!</TextBody>
      <Link to="/dashboard">
        <TextBody>Go to dashboard</TextBody>
      </Link>
    </div>
  )
}
