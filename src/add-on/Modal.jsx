import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

  

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export const ContactModal = ({open, handleClose}) => {
    const classes = useStyles();
    const [modalStyle] = useState({margin: 'auto'});

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className='flex mb-7 place-content-center border-black border-solid border-2 '>
         <AlternateEmailIcon fontSize='medium'/>: <a href="mailto:">Email</a> 
      </div>
      <div className='flex place-content-center border-black border-solid border-2 '>box 2</div>
      
    </div>
  );

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={open}
      onClose={handleClose}
      style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }}
    >
      {body}
    </Modal>
  );
};
