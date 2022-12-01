import { Button, Grid, TextField, Link, Typography, Paper } from "@mui/material"
import ImageField from "../../common/Imagefield/ImageField"
import LabelField from "../../common/LabelField/LabelField"
import SwitchField from "../../common/SwitchField/SwitchField"
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login'



export default function SignIn(props) {
    const image = {
        src: '../../Images/logo.svg'
    }
    const image1 = {
        src: '../../Images/Background.jpg'
        
    }
    return (
        <div>
            <Grid container spacing={2} >
                
                <Grid  padding={3} xs={12} md={4} lg={4} item>
                    <Grid  padding={3}xs={12} md={12} lg={12} item>
                    <ImageField image={image}></ImageField>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                       <LabelField variant={'h6'} label={'Login Form'}></LabelField> 
                        <LabelField variant={'div'} label={'Login to access your Account'}></LabelField>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                       <Paper><TextField fullWidth label={'Login'} id="fullWidth" /></Paper> 
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                        <Paper><TextField type={'password'}fullWidth label={'Password'} id="fullWidth" /></Paper>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                    <SwitchField></SwitchField>
                    </Grid>
                    <Grid paddingtop={2} margin={2} xs={12} md={12} lg={12} item>
                    <Button variant="contained" startIcon={<LoginIcon />}>Login</Button>
                    </Grid>
                    <Grid padding={2} xs={12} md={12} lg={12} item>
                    <Typography >
                        <Link href="/" underline="none">
                            {'Forgot Password?'}
                        </Link>
                    </Typography>
                    <Typography >
                        Dont have an Account?<Link href="/SignUp" underline="none">{'Sign Up!'}</Link>
                    </Typography>
                </Grid>

            </Grid>
            <Grid   style={{ height: '780px' }} xs={0} md={8} lg={8} item>
            <ImageField  image={image1}></ImageField>
            </Grid>
            </Grid>
            

        </div >
    )
    
    
}