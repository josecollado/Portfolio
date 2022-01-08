import React from 'react';
import LongAboutMe from './Content/LongAboutMe';
import { Button } from '@material-ui/core';

const AboutMe = () => {
  return (
    <div className=' about min-h-screen relative  '>
      <div className=' border-black border-solid border-2 z-10  absolute ml-5 md:h-48 md:w-48 md:-mt-10 '>
        image box{' '}
      </div>
      <div className='about-me-box z-0 relative bg-blueGray-300 rounded-xl  md:mx-24 md:mt-40 overflow-y-scroll '>
        <div className='flex place-content-center pt-4 pb-5'>
        <Button variant="outlined">TL;DR</Button>
        </div>
          <LongAboutMe />
      </div>
    </div>
  );
};

export default AboutMe;
