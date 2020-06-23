import React from 'react'
import Button from './button'
import styles from '../styles/hero-section/theme-button.module.css'
import cn from 'classnames'

const ThemeButton = ({ children, className }) => (
  <Button className={cn(styles.themeButton, className)}>{children}</Button>
)

export default ThemeButton
