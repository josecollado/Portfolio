import React from 'react';
import HomePage from '../assets/HomePage';
import Projects from '../assets/Projects';
import AboutMe from '../assets/About';

const Main = ({
  homeView,
  aboutView,
  projectsView,
  messageSent,
  handleMessage,
}) => {
  if (homeView) {
    return <HomePage messageSent={messageSent} handleMessage={handleMessage} />;
  } else if (aboutView) {
    return <AboutMe />;
  } else if (projectsView) {
    return <Projects />;
  } else {
    return <HomePage messageSent={messageSent} handleMessage={handleMessage} />;
  }
};

export default Main;
