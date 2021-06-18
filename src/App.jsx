import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div className='m-0  min-h-screen flex flex-row  '>
      <div className=' bg-blueGray-400 '>
        <Sidebar />
      </div>
      <div className=' bg-blueGray-500  w-screen min-h-screen '>
        <Main />
      </div>

    </div>
  );
};

export default App;
