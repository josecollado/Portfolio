import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div className='m-0  min-h-screen flex flex-row  border-purple-900 border-solid border-4'>
      <div className='bg-green-700'>
        <Sidebar />
      </div>
      <div className='sol bg-green-300  w-screen max-h-screen'>
        <Main />
      </div>

    </div>
  );
};

export default App;
