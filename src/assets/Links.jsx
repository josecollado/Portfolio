import React from 'react';
import twitter from './images/twitter.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

const Links = () => {
  return (
    <div className='flex flex-col bottom-0 space-y-2 place-items-center mt-auto border-red-600 border-solid border-4'>
      <a
        href='https://github.com/josecollado'
        target='_blank'
        className='github object-fill h-11 w-11'
      >
        <img src={github} alt='Github' />
      </a>
      <a
        href='https://www.linkedin.com/in/jose-collado/'
        target='_blank'
        className='linkedin  object-fill h-11 w-11'
      >
        <img src={linkedin} alt='Linkedin' />
      </a>
      <a
        href='https://twitter.com/joser_ce'
        target='_blank'
        className='twitter object-fill h-11 w-11'
      >
        <img src={twitter} alt='Twitter' />
      </a>
    </div>
  );
};

export default Links;
