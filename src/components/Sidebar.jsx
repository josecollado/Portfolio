import React from 'react'
import logo from '../assets/images/logo1.png'
import Links from '../assets/Links'
import homeIcon from '../assets/images/home.png'
import selfIcon from '../assets/images/user.png'
import folderIcon from '../assets/images/folder.png'
import letter from '../assets/images/letter.png'

const Sidebar = () => {
    return (
        <div className='flex flex-col border-red-900 border-solid border-4 min-h-full w-18'>
            <div className='logo object-fill h-32 w-32 -mx-4 border-red-600 border-solid border-4 place-items-center mb-auto'>
                <img src={logo} title='Jose Logo'/>
            </div>
            <div className='flex flex-col place-items-center border-red-900 border-solid border-4 space-y-20'> 
                <a href='#' className='object-fill h-9 w-9'>
                    <img src={homeIcon} title='Home Page'/>
                 </a>
                <a href='#' className='object-fill h-9 w-9'>
                    <img src={selfIcon} title='About Me'/>
                </a>
                <a href='#' className='object-fill h-9 w-9'>
                    <img src={folderIcon} title='Projects'/>
                </a>
                <a href='#' className='object-fill h-9 w-9'>
                    <img src={letter} title='Contact Me'/>
                </a>
            </div>
            <Links />
        
        </div>

    )
}

export default Sidebar