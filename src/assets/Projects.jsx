import React, { useState } from 'react';
import computer from '../lotties/computer.json';
import Lottie from 'lottie-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ProjectCard } from '../add-on/Card';
import logo from '../assets/images/logo-main.jpeg';
import frontPage from './images/complete.jpg';
import { ProjectModal } from '../add-on/ProjectModal';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = ()=> setOpen(true)
  const handleClose = ()=> setOpen(false)
  return (
    <div className='relative '>
      <h1 className=' flex absolute'>
        Page Is currently under construction... 
      </h1>


    </div>

  )
};

export default Projects;




  // const style = {
  //   height: 300,
  // };
  // return (
  //   <div className='projects min-h-screen relative flex lg:place-content-end'>
  //     <div className='z-0  rounded-3xl left-4 bg-blueGray-200 shadow-2xl absolute md:hidden lg:flex lg:mt-24 '>
  //       <Lottie
  //         animationData={computer}
  //         autoPlay={true}
  //         loop={true}
  //         style={style}
  //       />
  //     </div>
  //     <div className='z-10'>
  //       <Carousel
  //         showThumbs={false}
  //         showStatus={false}
  //         showIndicators={true}
  //         showArrows={false}
          
  //       >
  //         <div className=''>
  //           <div onClick={handleOpen}>
  //             <ProjectCard
  //               projectName={'Vinyl Hunt'}
  //               projectFrontImage={frontPage}
  //               bodyText={
  //                 'Collection & Shopping list application built using React.JS, using RapidAPI for music tracking and containerized with docker.'
  //               }
  //             />
  //           </div>
  //           <ProjectModal open={open} handleClose={handleClose} />
  //         </div>
  //         <div>
  //           <img src={logo} />
  //           <p className='legend'>Legend 1</p>
  //         </div>
  //       </Carousel>
  //     </div>
  //   </div>
  // );