import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'



function Register() {

    const [formValues, SetFormValues] = useState({
        firstname:"",
        middlename:"",
        lastname:"",
        course:"",
        Idnumber:"",
        contact:"",
        username: "",
        password: "",
        uselevel:"",
        Status:"",
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
        //     console.log(resData.newData);
        // })

    }

    return (
     
        <Box
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
        noValidate
        autoComplete="off" >
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        name="firstname"
                        value={formValues.firstname}
                        onChange={handleInput} />
               
                    <TextField
                        id="outlined-basic"
                        label="Middle Name"
                        variant="outlined"
                        name="middlename"
                        value={formValues.middlename}
                        onChange={handleInput} />

                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        name="lastname"
                        value={formValues.lastname}
                        onChange={handleInput} />           
                </div>
                
                <div>
                <Button align= "center" variant="contained" color="success" type='submit'>
                    Success
                </Button>
                </div>
            </form>
            </Box>

    )
}

export default Register
