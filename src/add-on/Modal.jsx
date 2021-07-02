import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 750,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '15px',
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    margin: 'auto',
  },
  mobile: {
    position: 'absolute',
    width: 750,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '15px',
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    margin: 'auto',
  },
}));

export const ContactModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = useState({ margin: 'auto' });
  const [messageValue, setMsgValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const handleMSGValue = (e) => {
    const value = e.target.value;
    return setMsgValue(value);
  };
  const handleEmailValue = (e) => {
    const value = e.target.value;
    return setEmailValue(value);
  };
  const handleNameValue = (e) => {
    const value = e.target.value;
    return setNameValue(value);
  };

  const handleClick = () => {
    // need to work on handle click function
    // would like to send data to db and then email or text me
    // about my new message or update me with db mail count
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className='flex flex-col w-3/4 main place-items-center py-10 '>
        <div className='w-full mt-7 text-center text-md  '>
          Want to get in touch?
          <br />
          Send me a message
          <br />
          through E-mail, LinkedIn,
          <br />
          or on my site.
          <br />
          Happy to connect and talk more!
        </div>
        <div className='p-3 text-center py-10'>
          <AlternateEmailIcon fontSize='default' className='' />:{' '}
          <a href='mailto:Jose@JoseR.io' >
            Jose@JoseR.io
          </a>
        </div>
        <div className='pt-3 w-full text-center'>
          <LinkedInIcon fontSize='default' className='' />{' '}
          <a
            className=''
            href='https://www.linkedin.com/in/jose-collado/'
            target='_blank'
          >
            linkedin.com/in/jose-collado
          </a>
        </div>
      </div>
      <div className='p-10 flex flex-col space-y-4 w-full place-content-center p-3 '>
        <TextField
          onChange={handleNameValue}
          id='outlined-size-small 1'
          label='Name'
          variant='outlined'
          className='w-56'
        />
        <TextField
          onChange={handleEmailValue}
          id='outlined-size-small 2'
          label='E-mail'
          variant='outlined'
          className='w-64'
        />
        <TextField
          id='outlined-multiline-static'
          label='Message..'
          multiline
          rows={5}
          variant='outlined'
          className=' w-80 '
          onChange={handleMSGValue}
        />
        <div className=''>
          <Button variant='outlined' className='w-full' onClick={handleClick}>
            <SendIcon />
          </Button>
        </div>
      </div>
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
        alignItems: 'center',
      }}
    >
      {body}
    </Modal>
  );
};
