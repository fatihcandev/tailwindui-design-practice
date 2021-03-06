import React from 'react'
import Button from '../../button'

const Close = ({ onClick }) => (
  <Button onClick={onClick} aria-label="Close the mobile navbar">
    <svg
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </Button>
)

export default Close
