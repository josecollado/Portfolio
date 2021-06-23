import React from 'react'
import MainContent from "./MainContent";
import Lottie from 'react-lottie'
import codeDesk from '../lotties/code-desk.json'



const HomePage = () =>{
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
        <div className='absolute z-0'>
          <MainContent />
        </div>
        <div className='code-desk  border-black border-solid border-2 z-10 float-right lg:pt-36 xl:mr-36 xl:pt-60 lg:mr-16 '>
          <Lottie options={defaultOptions} height={550} width={450} />
        </div>
        
      </div>
      )
}

export default HomePage;