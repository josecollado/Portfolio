import React, { useState } from 'react';
// import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '15px',
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    margin: 'auto',
  },
}));
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

export const ProjectModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = useState({ margin: 'auto' });

  return (
    <Modal
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      open={open}
      onClose={handleClose}
      onBackdropClick={handleClose}
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Text in a modal
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

// export default ProjectModal;
