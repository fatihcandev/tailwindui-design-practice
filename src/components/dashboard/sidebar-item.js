import React from 'react'
import styles from '../../styles/sidebar.module.css'

const SidebarItem = ({ children, ...props }) => (
  <div className={styles.sidebarItem} {...props}>
    {children}
  </div>
)

export default SidebarItem
