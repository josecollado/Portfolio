import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div className='flex flex-row'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main'>
        <Main />
      </div>

    </div>
  );
};

export default App;
