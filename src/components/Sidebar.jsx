import React from 'react'
import logo from '../assets/images/logo1.png'
import Links from '../assets/Links'
import homeIcon from '../assets/images/home.png'
import selfIcon from '../assets/images/user.png'
import folderIcon from '../assets/images/folder.png'
import contact from '../assets/images/contact.png'

const Sidebar = () => {
    return (
        <div className='flex flex-col border-red-900 border-solid border-4 min-h-screen w-18'>
            <div className='logo object-fill h-24 w-24  border-red-600 border-solid border-4 place-items-center pb-16 mb-auto'>
                <img src={logo} title='Jose Logo'/>
            </div>
            <div className='icons flex flex-col place-items-center border-red-900 border-solid border-4 space-y-8 bottom-0'> 
                <a href='#' className='object-fill h-11 w-11'>
                    <img src={homeIcon} title='Home Page'/>
                 </a>
                <a href='#' className='object-fill h-11 w-11'>
                    <img src={selfIcon} title='About Me'/>
                </a>
                <a href='#' className='object-fill h-11 w-11'>
                    <img src={folderIcon} title='Projects'/>
                </a>
                <a href='#' className='object-fill h-11 w-11'>
                    <img src={contact} title='Contact Me'/>
                </a>
            </div>
            <Links />
        
        </div>

    )
}

export default Sidebar