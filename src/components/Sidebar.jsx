import React, { useState } from 'react';
import logo from '../assets/images/logo-main.png';
import Links from '../assets/Links';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import PermMediaRoundedIcon from '@material-ui/icons/PermMediaRounded';
import { ContactModal } from '../add-on/Modal';

const Sidebar = ({
  setAboutView,
  setHomeView,
  setProjectsView,
  messageSent,
  handleMessage,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (value) => {
    if (value === 'home') {
      setProjectsView(false);
      setAboutView(false);
      setHomeView(true);
    } else if (value === 'user') {
      setProjectsView(false);
      setAboutView(true);
      setHomeView(false);
    } else if (value === 'projects') {
      setProjectsView(true);
      setAboutView(false);
      setHomeView(false);
    } else {
      setProjectsView(false);
      setAboutView(false);
      setHomeView(false);
    }
  };
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='side-nav flex flex-col h-full w-18'>
      <div className='logo object-fill h-32 w-32 -mx-4 top-0 place-items-center mb-auto sidebar'>
        <img src={logo} title='Logo' onClick={() => handleClick('home')} />
      </div>
      <div className='flex flex-col place-items-center lg:space-y-16 md:space-y-14 '>
        <HomeRoundedIcon
          fontSize={'default'}
          className='sidebar '
          titleAccess='Home Page'
          onClick={() => handleClick('home')}
        />
        <PersonSharpIcon
          fontSize={'default'}
          className='sidebar '
          titleAccess='About Me'
          onClick={() => handleClick('user')}
        />
        <PermMediaRoundedIcon
          fontSize={'default'}
          className='sidebar '
          titleAccess='Projects'
          onClick={() => handleClick('projects')}
        />

        <ContactMailRoundedIcon
          fontSize={'default'}
          type='button'
          className='sidebar '
          onClick={handleOpen}
          titleAccess='Contact Me'
        />
        <ContactModal
          open={open}
          handleClose={handleClose}
          messageSent={messageSent}
          handleMessage={handleMessage}
        />
      </div>

      <Links />
    </div>
  );
};

export default Sidebar;
