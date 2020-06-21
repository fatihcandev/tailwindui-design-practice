import React from 'react'
import styles from '../../styles/dashboard/content.module.css'
import TextTitle from '../text-title'
import DashedArea from './dashed-area'

const Content = () => (
  <div className={styles.content}>
    <TextTitle>Dashboard</TextTitle>
    <DashedArea />
  </div>
)

export default Content
