import React from 'react'
import styles from '../../styles/hero-section/image-section.module.css'

const ImageSection = ({ children }) => (
  <div className={styles.image}>{children}</div>
)

export default ImageSection
