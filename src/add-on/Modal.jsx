import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';

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
}));

export const ContactModal = ({
  open,
  handleClose,
  handleMessage,
  messageSent,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState({ margin: 'auto' });
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMsgValue] = useState('');

  const [clicked, setClicked] = useState(false);
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
  const templateParams = {
    name: nameValue,
    from_email: emailValue,
    message: messageValue,
  };

  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const userID = import.meta.env.VITE_USER_ID;
  const handleClick = (e) => {
    e.preventDefault();
    setClicked(false);
    if (
      nameValue.length > 2 &&
      messageValue.length > 2 &&
      emailValue.length > 2
    ) {
      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then(() => handleMessage())
        .catch((err) => console.log('failed', err));
    } else {
      setClicked(true);
    }
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
          <AlternateEmailIcon fontSize='default' />:{' '}
          <a href='mailto:Jose@JoseR.io' className=' hover:text-blue-700'>
            Jose@JoseR.io
          </a>
        </div>
        <div className='pt-3 w-full text-center'>
          <LinkedInIcon fontSize='default' className='' />{' '}
          <a
            className=' hover:text-blue-700'
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
          InputProps={{ style: { fontSize: 13 } }}
          error={clicked === true && nameValue < 2}
          helperText={clicked === true && nameValue < 2 ? 'Required' : ''}
          className='w-60'
        />
        <TextField
          onChange={handleEmailValue}
          id='outlined-size-small 2'
          label='E-mail'
          variant='outlined'
          className='w-64'
          InputProps={{ style: { fontSize: 13 } }}
          error={clicked === true && emailValue < 2}
          helperText={clicked === true && emailValue < 2 ? 'Required' : ''}
        />
        <TextField
          id='outlined-multiline-static'
          label='Message'
          multiline
          rows={5}
          variant='outlined'
          className=' w-80 '
          onChange={handleMSGValue}
          InputProps={{ style: { fontSize: 13 } }}
          error={clicked === true && messageValue < 2}
          helperText={clicked === true && messageValue < 2 ? 'Required' : ''}
        />
        <div className=''>
          {messageSent ? (
            <div className='main text-center'>Message Sent!</div>
          ) : (
            <Button variant='outlined' className='w-full' onClick={handleClick}>
              <SendIcon />
            </Button>
          )}
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
