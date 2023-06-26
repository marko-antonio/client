import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'


function Login() {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
            noValidate
            autoComplete="off" >
            <Typography align='center'>
                <h3>Title Here</h3>
            </Typography>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined" /></div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined" /></div>
            <div
                align="center">
                <Button
                    variant="contained">
                    Log In
                </Button>
            </div>
        </Box>
    )
}

export default Login
