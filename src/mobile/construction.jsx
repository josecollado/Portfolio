import React from 'react'
import Logo from '../assets/images/logo-main.png'

const TempMobileView = () =>{
    return (
        <div className='main mobile-placeholder bg-blueGray-400 w-screen text-center h-screen text-4xl pt-40 hidden'>
        Please visit site on desktop
        <br />

          <img
            src={Logo}
            className='object-fill h-28 w-30  mx-auto'
          />
        Mobile version is currently under construction...
      </div>
    )
}


export default TempMobileView