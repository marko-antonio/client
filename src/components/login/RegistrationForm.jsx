import { Box, Button, Divider, Stack, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {
  const [buttonStatus, setButtonStatus]= useState(false);
  const [formValues, SetFormValues] = useState({
    firstname: "",
    midname: "",
    lastname: "",
    email: "",
    contact: "",
    username: "",
    password: "",
  })
  const handleInput = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      firstname: formValues.firstname,
      middlename: formValues.middlename,
      lastname: formValues.lastname,
      status: 1,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password,
    }
    axios.post('http://localhost:5010/crdis/registration/create', newData)
      .then((res) => {
        //console.log(res.data)
         // clear textfields after submission
        setButtonStatus(true);
        toast.success('👌Request successfully submitted!!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          
      }).catch((error) => {
        console.log(error)
      });
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Box
        sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' }, }}
        noValidate
        autoComplete="off" >
        <form onSubmit={handleSubmit}>
          <div align="center">
            <TextField
              required
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="firstname"
              value={formValues.firstname}
              onChange={handleInput} />

            <TextField
              required
              id="outlined-basic"
              label="Middle Name"
              variant="outlined"
              name="middlename"
              value={formValues.middlename}
              onChange={handleInput} />
            <TextField
              required
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastname"
              value={formValues.lastname}
              onChange={handleInput} />
            <TextField
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type='email'
              name="email"
              value={formValues.email}
              onChange={handleInput} />
            <Divider variant="middle" />
            <TextField
              required
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              value={formValues.username}
              onChange={handleInput} />
            <TextField
              required
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type='password'
              name="password"
              value={formValues.password}
              onChange={handleInput} />
          </div>


          <Box textAlign={'center'} marginTop={5}>
            <div>
              <Button
                disabled={buttonStatus}
                variant="contained"
                alignItems="center"
                type='submit'>
                Submit Request
              </Button>
            </div>
          </Box>
        </form>
      </Box>
      <ToastContainer />
    </Stack>
  )
}

export default RegistrationForm
