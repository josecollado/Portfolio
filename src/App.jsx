import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div className='container m-0 flex flex-row  border-red-600 border-solid border-4'>
      <div className='bg-green-700'>
        <Sidebar />
      </div>
      <div className='bg-green-300 w-full'>
        <Main />
      </div>

    </div>
  );
};

export default App;
