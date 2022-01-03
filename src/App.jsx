import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import PullDown from './assets/PullDown';
import TempMobileView from './mobile/construction'

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
      <TempMobileView />
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
