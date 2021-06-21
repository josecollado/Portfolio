import React from 'react';
import MainContent from '../assets/MainContent';
import Lottie from 'react-lottie';
import codeDesk from '../lotties/code-desk.json';




const Main = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codeDesk,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
 
  return (
    <div className='min-h-screen relative'>
      <div className='  absolute'>
        <MainContent />
      </div>
      <div className=' z-10 w-1/2 right-0 float-right min-h-screen  pt-48 '>
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
    </div>
  );
};

export default Main;
