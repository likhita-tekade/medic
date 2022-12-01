import React from 'react'
import {Switch, FormControlLabel,FormGroup} from '@mui/material'
export default function SwitchField(props) {
  return (
    <div>
        {/*<Switch {...props.label} defaultChecked />*/}
      
     <FormControlLabel control={<Switch defaultChecked />} label="Remember Me" />
  


    </div>
  )
}
