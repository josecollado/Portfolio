import React from 'react'
import logo from '../assets/images/black.png'
import Links from '../assets/Links'
const Sidebar = () => {
    return (
        <div>
        Sidebar
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='section dropdown'> {/* Where the about me and other a tags will be sitting*/}
                <a href='#'>Portfolio </a>
                <a href='#'>About Me</a>
                <a href='#'>Project</a>
                <a href='#'>Resume Download</a>
            </div>
            <Links />
        
        </div>

    )
}

export default Sidebar