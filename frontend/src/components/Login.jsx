import React,{ useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import{
    Button,
    TextField,
    Box,
    Typography,
    Container,
    Paper,CircularProgress
} from '@mui/material'
import { Link, useNavigate} from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [loading, setLoading] = useState(false);
  

    const{
        register,
        handleSubmit,
        formState:{errors}
    }=useForm()
    const navigate = useNavigate(); 

const onSubmit = async (data)=>{
    setLoading(true);
    try{
        console.log(data)
        const response = await axios.post('http://localhost:3000/users/login',data);
        const { role, name, email, regno, contact, clubs } = response.data;

        console.log(response.data);
        
        
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userRegno', regno);
    localStorage.setItem('userContact', contact);
    localStorage.setItem('userClubs', JSON.stringify(clubs));

       
        
    if (role === 'admin') {
        navigate('/admindashboard');
      } else {
        navigate('/memberdashboard');
      }
    }
    catch(error){
        console.error(error);
        alert('Invalid credentials')
    }
    finally{
    
        setLoading(false);
    }
};

return (
    <>   
    <Container maxWidth="xs"  sx={{
        height: "100vh", 
        display: "grid",
        justifyContent: "center", 
        alignItems: "center",     
      }}>
        
        <Paper elevation={3} sx={{p:4}} id='logcont'>
        <div style={{ textAlign: 'center' }}>
        <Typography variant='h4'>Welcome to the Club!</Typography>
        
       
              <Typography variant="caption">Since 2025</Typography>
           </div>

     
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:'center',
                
            }}>
                <Typography component='h1' variant="h5" gutterBottom>
                    Log In
                </Typography>
                <Box component="form" 
                   onSubmit={handleSubmit(onSubmit)} noValidate
                   sx={{mt:1}}>
                    <TextField 
                        sx={{mb:3}}
                         //required
                         type="email"
                         fullWidth
                         id="lemail"
                         label="Email Address"
                         name="email"
                         autoComplete="email"
                         autoFocus
                         //applied for all fields
                         {...register('email',{
                            required:"Email is required"
                         })}
                         //console.log(error)
                         error={!!errors.email}
                         helperText = {errors.email?.message}
                    />
                    <TextField 
                         required
                         fullWidth
                         type="password"
                         id="lpassword"
                         label="Password"
                         name="password"
                         autoComplete="current-password" 
                         {...register('password',{
                            required:'Password is required',
                            minLength:{
                                value:6,
                                message:'Password must be atleast 6 characters'
                            }
                         })}
                         error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    {loading && (
  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
    <CircularProgress />
  </Box>
)}

                    <Button 
                    id="b"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    disabled={loading}>
                        {loading ? 'Logging in...' : 'Log In'}
                    </Button>
                    <div style={{ textAlign: 'center' }}>
                    <Link style={{textDecoration:"none",textAlign:"center"}}>Forgot password?</Link>
                    </div>
                </Box>
            </Box>
        </Paper>
    </Container>
    </>
  )
}

export default Login