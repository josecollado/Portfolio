import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import PullDown from './assets/PullDown';
import Logo from './assets/images/logo-main.png';

const App = () => {
  const [projectsView, setProjectsView] = useState(false);
  const [homeView, setHomeView] = useState(true);
  const [aboutView, setAboutView] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const handleMessage = () => {
    return setMessageSent(true);
  };
  return (
    <div className='flex flex-row  '>
      <div className='main mobile-placeholder bg-blueGray-400 w-screen text-center h-screen text-4xl pt-40 hidden'>
        Please visit site on desktop
        <br />

          <img
            src={Logo}
            className='object-fill h-28 w-30  mx-auto'
          />
      
        Mobile version is currently in construction...
      </div>
      <div className='side bg-blueGray-400 '>
        <Sidebar
          setProjectsView={setProjectsView}
          setAboutView={setAboutView}
          setHomeView={setHomeView}
          messageSent={messageSent}
          handleMessage={handleMessage}
        />
        <PullDown />
      </div>
      <div className='main bg-blueGray-500  w-screen'>
        <Content
          aboutView={aboutView}
          homeView={homeView}
          projectsView={projectsView}
          messageSent={messageSent}
          handleMessage={handleMessage}
        />
      </div>
    </div>
  );
};

export default App;
