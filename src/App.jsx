import React,{useState} from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import PullDown from './assets/PullDown'

const App = () => {
  const [projectsView, setProjectsView] = useState(false);
  const [homeView, setHomeView] = useState(true);
  const [aboutView, setAboutView] = useState(false);
  return (
    <div className=' flex flex-row  '>
      <div className=' bg-blueGray-400 '>
        <Sidebar setProjectsView={setProjectsView} setAboutView={setAboutView} setHomeView={setHomeView} />
        <PullDown />
      </div>
      <div className=' bg-blueGray-500  w-screen'>
        <Main aboutView={aboutView} homeView={homeView} projectsView={projectsView} />
      </div>

    </div>
  );
};

export default App;
