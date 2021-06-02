import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div className='container'>
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
