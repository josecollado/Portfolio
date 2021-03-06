import React from 'react';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const PullDown = () => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className='absolute pull-down-bar w-full  text-center sm:hidden ' onClick={handleClick}>
      <KeyboardArrowDownIcon fontSize='large' />
    </div>
  );
};

export default PullDown;
