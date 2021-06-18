import React from 'react'
import logo from '../assets/images/logo1.png'
import Links from '../assets/Links'
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import PermMediaRoundedIcon from '@material-ui/icons/PermMediaRounded';

const Sidebar = () => {
    return (
        <div className='flex flex-col min-h-full w-18'>
            <div className='logo object-fill h-32 w-32 -mx-4  -mt-4 top-0 place-items-center mb-auto'>
                <img src={logo} title='Logo'/>
            </div>
            <div className='flex flex-col place-items-center space-y-20'> 
                <a href='#' className='object-fill h-9 w-9 ' title='Home Page'>
                    <HomeRoundedIcon fontSize='large' />
                 </a>
                <a href='#' className='object-fill h-9 w-9' title='About Me'>
                    <PersonSharpIcon fontSize='large' /> 
                </a>
                <a href='#' className='object-fill h-9 w-9' title='Projects'>
                    <PermMediaRoundedIcon fontSize='large' />
                </a>
                <a href='#' className='object-fill h-9 w-9' title='Contact Me'>
                   <ContactMailRoundedIcon fontSize='large' />
                </a>
            </div>
            <Links />
        
        </div>

    )
}

export default Sidebar