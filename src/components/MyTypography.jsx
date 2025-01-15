import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export default function MyTypography() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">          
          <Typography variant="h6" color="inherit" component="div">
            Typography + Colors
          </Typography>
        </Toolbar>
      </AppBar>

        </Box>
        
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h1" gutterBottom sx={{color: "red"}}>
            h1 Heading
          </Typography>
          <Typography variant="h2" gutterBottom sx={{color: "green"}}>
            h2 Heading
          </Typography>
          <Typography variant="h3" gutterBottom sx={{color: "blue"}}>
            h3 Heading
          </Typography>
          <Typography variant="h4" gutterBottom sx={{color: "darkviolet"}}>
            h4 Heading
          </Typography>
          <Typography variant="h5" gutterBottom sx={{color: "cyan"}}>
            h5 Heading
          </Typography>
          <Typography variant="h6" gutterBottom sx={{color: "brown"}}>
            h6 Heading
          </Typography>
        
          <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
            button text
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
            caption text
          </Typography>
        
        </Box>
    </div>
  );
}
