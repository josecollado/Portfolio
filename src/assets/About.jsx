import React, { useState } from 'react';
import LongAboutMe from './Content/LongAboutMe';
import ShortAboutMe from './Content/ShortAboutMe';
import { Button } from '@material-ui/core';
import ProPic from './images/proPic.jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutMe = () => {
  const [button, setButtonClicked] = useState(true);
  return (
    <div className=' min-h-screen relative flex place-content-end '>
      <div className='  z-10 absolute md:left-3 lg:left-6 2xl:left-16 mt-24  md:w-52 lg:w-64 xl:w-80 '>
        <LazyLoadImage
          src={ProPic}
          className=' rounded-2xl shadow-xl'
          alt='Profile Picture'
        />
      </div>
      <div className='about-me-box z-0 shadow-2xl bg-blueGray-300 rounded-2xl pl-5  overflow-y-scroll md:w-3/4 mt-36 mr-5 2xl:mr-14'>
        <div className='flex place-content-end pr-20 py-5 mt-8 '>
          <Button
            variant='outlined'
            size='small'
            onClick={() =>
              !button ? setButtonClicked(true) : setButtonClicked(false)
            }
          >
            {button ? 'TL;DR' : 'Longer Version'}
          </Button>
        </div>
        {button ? <LongAboutMe /> : <ShortAboutMe />}
      </div>
    </div>
  );
};

export default AboutMe;
