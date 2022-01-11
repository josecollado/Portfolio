import React, {useState} from 'react';
import LongAboutMe from './Content/LongAboutMe';
import ShortAboutMe from './Content/ShortAboutMe';
import { Button } from '@material-ui/core';
import zoomedPic from './images/zoomedPic.png'
import ProPic from './images/proPic.png'

const AboutMe = () => {
  const [button, setButtonClicked] = useState(true)
  return (
    <div className=' about max-h-screen mb-72 relative  '>
      <div className='  z-10 absolute ml-5 md:h-48 md:w-48 md:-mt-10 '>
        <img src={ProPic} alt='Profile Picture' className=' rounded-xl' />
      </div>
      <div className='about-me-box z-0 relative bg-blueGray-300 rounded-xl  md:mx-24 md:mt-36 overflow-y-scroll '>
        <div className='flex place-content-center pt-8 pb-2'>
        <Button variant="outlined" size='small' onClick={() => !button ? setButtonClicked(true) : setButtonClicked(false) }>{button ? 'TL;DR':'Longer Version' }</Button>
        </div>
        {
          button
          ?
          <LongAboutMe />
          :
          <ShortAboutMe />
        }
      </div>
    </div>
  );
};

export default AboutMe;
