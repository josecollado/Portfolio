import React from 'react';
import HomePage from '../assets/HomePage';
import Projects from '../assets/Projects'
import AboutMe from '../assets/About'

const Main = ({ homeView, aboutView, projectsView }) => {
  
  if(homeView){
    return (
     <HomePage/>
    );
  }else if(aboutView){
    return(
      <AboutMe/>
    )
  } else if(projectsView){
    return(
      <Projects/>
    )
  }else {
    return (
      <HomePage/>
    );
  }
};

export default Main;
