import { Button } from '@mui/material'
import React from 'react'

function BaseButton({variant}) {
  return (
    <Button variant={variant}>{variant}</Button>
  )
}

export default BaseButton