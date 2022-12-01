import React from 'react'
import {Switch, FormControlLabel,FormGroup} from '@mui/material'
export default function SwitchField1(props) {
  return (
    <div>
        {/*<Switch {...props.label} defaultChecked />*/}
      
     <FormControlLabel control={<Switch defaultChecked />} label="I agree to the Terms and Privacy." />
  


    </div>
  )
}
