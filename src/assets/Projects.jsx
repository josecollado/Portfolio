import React from 'react';
import computer from '../lotties/computer.json';
import Lottie from 'lottie-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {ProjectCard} from '../add-on/Card'
import logo from '../assets/images/logo-main.jpeg'



const Projects = () => {
  const style = {
    height: 300,
  };
  return (
    <div className='projects min-h-screen relative flex lg:place-content-end'>
      <div className='  rounded-3xl left-4 bg-blueGray-200 shadow-2xl absolute md:hidden lg:flex lg:mt-24 '>
        <Lottie
          animationData={computer}
          autoPlay={true}
          loop={true}
          style={style}
        />
      </div>
      <div className=' border-2 border-solid border-black absolute  md:left-44 '>
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
          <div>
            <ProjectCard   />
          </div>
          <div>
            <img src={logo} />
            <p className='legend'>Legend 1</p>
          </div>
          <div>
            <img src={logo} />
            <p className='legend'>Legend 1</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
