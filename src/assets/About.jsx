import React from 'react';
import LongAboutMe from './Content/LongAboutMe';

const AboutMe = () => {
  return (
    <div className=' about min-h-screen relative '>
      <div className=' border-black border-solid border-2 z-10 '>
        image box{' '}
      </div>
      <div className='about-me-box bg-blueGray-300 rounded-xl border-black border-solid border-2  md:mx-24 md:my-24  overflow-y-scroll '>
        <div className=' p-5 '>
          <LongAboutMe />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
