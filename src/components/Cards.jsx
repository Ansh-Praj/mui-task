import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useLocation } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Cards() {

    const location = useLocation()
    const componentName = location.pathname.split('/')[1] || "Home"

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">          
          <Typography variant="h6" color="inherit" component="div">
            {componentName}
          </Typography>
        </Toolbar>
      </AppBar>

        <br />
        <br />
        <br />

        <Card variant="outlined">
            <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Card 1
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        <br />
        <Card variant="outlined">
            <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Card 2
            </Typography>
            <Typography variant="h5" component="div">
                enumerate
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>verb</Typography>
            <Typography variant="body2">
            to name a list of things separately, one by one
                <br />
                {'"The teacher asked the students to enumerate the various after-effects of Industrial Revolution."'}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    </Box>
  )
}

export default Cards