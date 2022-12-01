import { Typography } from '@mui/material'
import React from 'react'

export default function LabelField(props) {
  return (
    <div>
        <Typography variant={props.variant} style={props.style}>
          {props.label}
        </Typography>
    </div>
  )
}
