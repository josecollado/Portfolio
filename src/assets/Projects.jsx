import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ProjectCard } from '../add-on/ProjectCard';
import VinylHuntFrontPage from './images/front.jpg';
import commerceFrontPage from './images/e-commerce.gif';

const Projects = () => {

  return (
    <div className=' flex justify-center mt-52 '>
      <div className='   md:w-3/4 lg:w-100  xl:w-2/3 '>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          useKeyboardArrows={true}
          transitionTime={'1000'}
        >
          <div>
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
