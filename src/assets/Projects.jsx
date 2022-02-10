import React from 'react';
import computer from '../lotties/computer.json';
import Lottie from 'lottie-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ProjectCard } from '../add-on/Card';
import logo from '../assets/images/logo-main.jpeg';
import frontPage from './images/front.jpg';
import { ProjectModal } from '../add-on/ProjectModal';

const Projects = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    height: 300,
  };
  return (
    <div className='projects min-h-screen relative flex lg:place-content-end'>
      <div className='z-0  rounded-3xl left-4 bg-blueGray-200 shadow-2xl absolute md:hidden lg:flex lg:mt-24 '>
        <Lottie
          animationData={computer}
          autoPlay={true}
          loop={true}
          style={style}
        />
      </div>
      <div className='z-10 border-2 border-solid border-black absolute '>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          showArrows={false}
        >
          <div onClick={handleOpen}>
            <ProjectCard
              projectName={'Vinyl Hunt'}
              projectFrontImage={frontPage}
              bodyText={
                'list collection/shopping application built using React.JS and containerized with docker.'
              }
            />
            <ProjectModal
              open={open}
              handleClose={handleClose}
            />
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
