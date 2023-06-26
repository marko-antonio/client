import { Box, Button, Card, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Rightbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <Box flex={1} p={2}>
      <Stack
        direction="column"
        justifyContent="left"
        alignItems="Left"

      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Name Here
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Administrator
            </Typography>
            <IconButton onClick={handleOpen}>
              <ManageAccountsIcon />
            </IconButton>
          </CardContent>
          <CardActions>
            <Button size="small" color="error">Log Out</Button>
          </CardActions>
        </Card>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Mark Joseph Pili
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}> 
            Account Type: Administrator
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>       
            Course: IT
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Building: DS
          </Typography>
        </Box>

      </Modal>
    </Box>
  )
}

export default Rightbar
