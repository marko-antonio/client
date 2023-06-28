import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'


function Loginform() {

  const [formValues, SetFormValues] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    course: "",
    Idnumber: "",
    contact: "",
    username: "",
    password: "",
    uselevel: "",
    Status: "",
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
    console.log(newData)
    // axios.post("http://localhost:5010/api/user",newData).then((resData)=>{
    //     console.log(resData.newData);
    // })
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
                alignItems="center">
                Log in
              </Button>
            </div>
          </Box>
        </form>
      </Box>
    </Stack>
  )
}

export default Loginform
