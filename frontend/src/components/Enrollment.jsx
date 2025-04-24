import * as React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import './Enrollment.css';


const Enrollment = () => {
  //hook is a function that allows you to use state and other React features in functional components
  //useForm is a custom hook that manages the form state and validation
  //register is a function that registers the input fields to the form state
  //handleSubmit is a function that handles the form submission
  //formState is an object that contains the form state and validation errors
  //errors is an object that contains the validation errors for each field
  //reset is a function that resets the form state to its initial values
   const { register, handleSubmit, formState: { errors }, reset } = useForm();

  //this function handles the form submission
  //it sends a post request to the server with the form data
  const onSubmit = async (data) => {
    try {
    
      //the data is sent to the server using axios post method
     const response = await axios.post('http://localhost:3000/enrolls', data);
      alert(`${response.data.message}`);
      reset();
    } catch (error) {
      const errorMessage = 'Enrollment failed. Please try again.';
      alert(errorMessage);
    }
  };

  

  return (
    <Box component="section" sx={{ p: 4, textAlign: 'center' }} className='enrollbox'>
      <div className="a">
        <h2 className='enroll'>ENROLLMENT FORM</h2> 
        
        <form className='enrollform' onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="name"
            label="Name"
            type="text"
            className='enrollinput'
            {...register("name", { required: true })}
          />
         
          
          <TextField
            id="rollNo"
            label="Roll Number"
            type="text"
            className='enrollinput'
            {...register("rollNo", { required: true })}
          />
         

          <TextField
            id="department"
            label="Department"
            type="text"
            className='enrollinput'
            {...register("department", { required: true })}
          />
          

          <TextField
            id="contactNumber"
            label="Contact Number"
            type="tel"
            className='enrollinput'
            {...register("contactNumber", { required: true })}
          />
          

          <TextField
            id="clubName"
            label="Club Name"
            type="text"
            className='enrollinput'
            {...register("clubName", { required: true })}
         
          />
          
          <TextField
            id="email"
            label="Email Id"
            type="email"
            className='enrollinput'
            {...register("email", { required: true })}
         
          />
          
          
          <Button 
            type="submit" 
            variant="contained" 
            className='ebutton'
          >
            ENROLL
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default Enrollment;