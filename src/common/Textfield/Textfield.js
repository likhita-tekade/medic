import React from 'react'
import  { TextField,Typography } from '@mui/material'

export default function Textfield(props) {
    return (
        <div>
            <TextField id={props.id} label={props.label} variant={props.variant} />
            {
                props.error &&
                <Typography component={'span'}>
                    {props.error}
                    
                    </Typography>


            }
        </div>
    )
}