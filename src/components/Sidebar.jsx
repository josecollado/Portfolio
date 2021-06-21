import React, { useState } from 'react';
import logo from '../assets/images/logo1.png';
import Links from '../assets/Links';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import PermMediaRoundedIcon from '@material-ui/icons/PermMediaRounded';
import { ContactModal } from '../add-on/Modal';

const Sidebar = ({ setAboutView, setHomeView, setProjectsView }) => {
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
    <div className='flex flex-col h-full w-18'>
      <div className='logo object-fill h-32 w-32 -mx-4  -mt-4 top-0 place-items-center mb-auto sidebar'>
        <img src={logo} title='Logo' onClick={()=>handleClick('home')}/>
      </div>
      <div className='flex flex-col place-items-center space-y-20'>
        <HomeRoundedIcon
          fontSize='large'
          className='sidebar object-fill h-9 w-9 contact'
          titleAccess='Home Page'
          onClick={() => handleClick('home')}
        />
        <PersonSharpIcon
          fontSize='large'
          className='sidebar object-fill h-9 w-9'
          titleAccess='About Me'
          onClick={() => handleClick('user')}
        />
        <PermMediaRoundedIcon
          fontSize='large'
          className='sidebar object-fill h-9 w-9'
          titleAccess='Projects'
          onClick={() => handleClick('projects')}
        />

        <ContactMailRoundedIcon
          fontSize='large'
          type='button'
          className='sidebar object-fill h-9 w-9'
          onClick={handleOpen}
          titleAccess='Contact Me'
        />
        <ContactModal open={open} handleClose={handleClose} />
      </div>

      <Links />
    </div>
  );
};

export default Sidebar;
