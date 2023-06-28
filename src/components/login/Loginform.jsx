import React from 'react'

function Loginform() {
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
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Middle Name"
            variant="outlined"
            name="middlename"
            value={formValues.middlename}
            onChange={handleInput} />
        </div>
      </form>
    </Box>

  )
}

export default Loginform
