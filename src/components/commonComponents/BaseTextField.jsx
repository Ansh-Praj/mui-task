import React from 'react'
import { TextField } from '@mui/material'

function BaseTextField({variant, label}) {
  return (
    <>
        <TextField label={label} variant={variant} />
    </>
  )
}

export default BaseTextField