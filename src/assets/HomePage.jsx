import React from 'react';
import MainContent from './Content/MainContent';
import Lottie from 'lottie-react';
import codeDesk from '../lotties/laptop.json';

const HomePage = ({ messageSent, handleMessage }) => {
  const width = window.innerWidth
  const style = {
    width: width < 840 ? 350 : 550
  }

  return (
    <div className='min-h-screen relative flex place-content-start '>
      <div className=' z-0'>
        <MainContent messageSent={messageSent} handleMessage={handleMessage} />
      </div>
      <div className='code-desk  z-10 absolute right-0 md:pt-72 m-auto '>
        <Lottie animationData={codeDesk} autoPlay={true} loop={true} style={style}  />
      </div>
    </div>
  );
};

export default HomePage;
