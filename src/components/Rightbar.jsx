import { Box, Button, Card, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function Rightbar() {
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
            <IconButton>
              <ManageAccountsIcon />
            </IconButton>
          </CardContent>
          <CardActions>
            <Button size="small" color="error">Log Out</Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  )
}

export default Rightbar
