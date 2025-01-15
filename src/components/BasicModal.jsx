import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">          
          <Typography variant="h6" color="inherit" component="div">
            Modal + Chip
          </Typography>
        </Toolbar>
      </AppBar>

    </Box>
        <br />
        <br />
        <br />
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Chip label="This text is used with Chip." variant="outlined" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
