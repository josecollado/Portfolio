import React from 'react'
import Lottie from 'react-lottie';
import programmer from '../lotties/programmer.json';

const Projects = () =>{
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: programmer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
    return (
        <div className='projects min-h-screen relative '>
        <div className=' flex flex-col  border-black border-solid border-2  float-left mt-52 pl-20'>
        <Lottie options={defaultOptions} height={550} width={550} />
        </div>
      </div>
    )
}



export default Projects;