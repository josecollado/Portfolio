import React from 'react';
import twitter from './images/twitter.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

const Links = () => {
  return (
    <div className='links'>
      <a
        href='https://github.com/josecollado'
        target='_blank'
        className='github'
      >
        <img src={github} alt='Github' />
      </a>
      <a
        href='https://www.linkedin.com/in/jose-collado/'
        target='_blank'
        className='linkedin'
      >
        <img src={linkedin} alt='Linkedin' />
      </a>
      <a
        href='https://twitter.com/joser_ce'
        target='_blank'
        className='twitter'
      >
        <img src={twitter} alt='Twitter' />
      </a>
    </div>
  );
};

export default Links;
