import React from 'react'
import styles from '../styles/url.module.css'
import TextBody from './dashboard/text-body'

const Url = ({ href, title, children }) => (
  <a href={href} title={title} className={styles}>
    <TextBody>{children}</TextBody>
  </a>
)

export default Url
