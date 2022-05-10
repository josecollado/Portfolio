import React from 'react';
import computer from '../lotties/computer.json';
import Lottie from 'lottie-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ProjectCard } from '../add-on/CarouselCard';
import VinylHuntFrontPage from './images/complete.jpg';
import commerceFrontPage from './images/e-commerce.gif'



const Projects = () => {
  const style = {
    height: 400,
  };
  return (
    <div className=' relative '>
      <div className='z-0  rounded-3xl right-1 mr-10 object-fill mt-44  absolute md:hidden lg:hidden xl:flex  '>
        <Lottie
          animationData={computer}
          autoPlay={true}
          loop={true}
          style={style}
        />
      </div>
      {/* border-2 border-solid border-black  */}
      <div className='z-10 absolute flex md:w-3/4 xl:w-10 md:ml-24 md:-mt-60 xl:pt-32 lg:pt-32 md:pt-32'>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          useKeyboardArrows={true}
        >
          <div >
              <ProjectCard
                projectName={'Greenfield Retail Client'}
                projectFrontImage={commerceFrontPage}
                url={'https://github.com/HR-FDC-QUASAR/project-greenfield'}
                bodyText={
                  'Site allows a user to interact with dynamic API data through product details, reviews, and cart functionality. Built using React.JS,Redux,Express and Material UI. '
                }
              />

          </div>
          <div>
              <ProjectCard
                projectName={'Vinyl Hunt'}
                projectFrontImage={VinylHuntFrontPage}
                url={'https://github.com/josecollado/VinylHunt'}
                bodyText={
                  'Collection & Shopping list application built using React.JS, using RapidAPI for music tracking and containerized with docker.'
                }
              />

          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
