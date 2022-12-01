import { Button, Grid, TextField, Link, Typography, Paper } from "@mui/material"
import { height } from "@mui/system"
import ImageField from "../../common/Imagefield/ImageField"
import LabelField from "../../common/LabelField/LabelField"
import SwitchField1 from "../../common/SwitchField/SwitchField1"
import AddIcon from '@mui/icons-material/Add'



export default function SignUp(props) {
    const image = {
        src: './Images/logo.svg'
    }
    const image1 = {
        src: './Images/bg.jpg',
        Media: { height: 550, width: '100%' } 
       
    }
    return (
        <div>
            <Grid container spacing={2} >
                
                <Grid  padding={3} xs={12} md={4} lg={4} item>
                    <Grid  padding={3}xs={12} md={12} lg={12} item>
                    <ImageField image={image}></ImageField>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                       <LabelField variant={'h6'} label={'Sign up'}></LabelField> 
                        <LabelField variant={'div'} label={'Create your Account'}></LabelField>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                       <Paper><TextField fullWidth label={'Name'} id="fullWidth" /></Paper> 
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                       <Paper><TextField fullWidth label={'EMail Address'} id="fullWidth" /></Paper> 
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                        <Paper><TextField type={'password'}fullWidth label={'Password'} id="fullWidth" /></Paper>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                    <SwitchField1></SwitchField1>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                    <Button variant="contained" startIcon={<AddIcon />} >Register</Button>
                    </Grid>
                    <Grid padding={2} xs={12} md={12} lg={12} item>
                    <Typography >
                         Have an Account?<Link to href="./SignIn" underline="none">{'Sign In!'}</Link>
                    </Typography>
                </Grid>

            </Grid>
            <Grid style={{ height: '750px' }} xs={0} md={8} lg={8} item>
            <ImageField image={image1} ></ImageField>
            </Grid>
            </Grid>
            

        </div >
    )
    
    
}