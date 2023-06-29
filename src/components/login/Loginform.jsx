import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginForm() {

  const [formValues, SetFormValues] = useState({
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
      username: formValues.username,
      password: formValues.password
    }

    axios.post('http://localhost:5010/crdis/login/verification', newData)
      .then((res) => {
        // console.log(res.data)
        toast.success('Valid Credentials 👍', {
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
        // console.log(error)
        toast.error('Invalid Credentials ✋', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography>
        Log in to continue
      </Typography>
      <Box
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              name="username"
              value={formValues.username}
              onChange={handleInput} />
          </div>
          <div>
            <TextField
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
                variant="contained"
                alignItems="center"
                type='submit'>
                Log in
              </Button>
            </div>
          </Box>
        </form>
      </Box>
      <ToastContainer />
    </Stack>

  )
}

export default LoginForm
