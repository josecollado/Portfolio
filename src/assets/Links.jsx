import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Links = () => {
  let width = window.innerWidth
  return (
    <div className='flex flex-col bottom-0 space-y-4 place-items-center mt-auto pb-2'>
      <a
        href='https://github.com/josecollado'
        target='_blank'
      >
         <GitHubIcon fontSize={ width < 770 ? 'default' : 'large'}/>
      </a>
      <a
        href='https://www.linkedin.com/in/jose-collado/'
        target='_blank'
      >
        <LinkedInIcon fontSize={ width < 770 ? 'default' : 'large'}/>
      </a>
      <a
        href='https://twitter.com/joser_ce'
        target='_blank'
      >
        <TwitterIcon fontSize={ width < 770 ? 'default' : 'large'} />
      </a>
    </div>
  );
};

export default Links;
