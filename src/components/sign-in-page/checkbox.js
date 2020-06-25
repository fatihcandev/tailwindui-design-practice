import React from 'react'
import styles from '../../styles/sign-in-page/input.module.css'
import TextBody from '../text-body'
import Check from './icons/check'
import Button from '../button'

const Checkbox = ({ checked, label, onCheck }) => (
  <div className={styles.checkboxWrapper}>
    <Button
      className={checked ? styles.checkboxChecked : styles.checkbox}
      aria-label={label}
      onClick={onCheck}
    >
      <Check />
    </Button>
    <TextBody>{label}</TextBody>
  </div>
)

export default Checkbox
