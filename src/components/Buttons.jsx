import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import BaseButton from './commonComponents/BaseButton';



export default function Buttons() {


    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">          
          <Typography variant="h6" color="inherit" component="div">
            Buttons (common components)
          </Typography>
        </Toolbar>
      </AppBar>

        <br />
        <br />
        <br />
        <BaseButton variant='contained'/>
        <BaseButton variant='text'/>
        <BaseButton variant='outlined'/>
    </Box>
  );
}
