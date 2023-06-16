import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

function Dashboard() {
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Thesis Request
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <h2>4</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View more</Button>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Schedule Request
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <h2>10</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View more</Button>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Account Request
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <h2>4</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View more</Button>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total Group
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <h2>4</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View more</Button>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Tangina
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <h2>4</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View more</Button>
        </CardActions>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Mo
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            <h2>4</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View more</Button>
        </CardActions>
      </Card>
    </Stack>
  )
}

export default Dashboard
