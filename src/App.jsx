import React,{useState} from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  const [projectsView, setProjectsView] = useState(false);
  const [homeView, setHomeView] = useState(true);
  const [aboutView, setAboutView] = useState(false);
  return (
    <div className='m-0  min-h-full flex flex-row  '>
      <div className=' bg-blueGray-400 '>
        <Sidebar setProjectsView={setProjectsView} setAboutView={setAboutView} setHomeView={setHomeView}/>
      </div>
      <div className=' bg-blueGray-500  w-screen min-h-full '>
        <Main aboutView={aboutView} homeView={homeView} projectsView={projectsView} />
      </div>

    </div>
  );
};

export default App;
