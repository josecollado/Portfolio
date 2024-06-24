import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Links = () => {

  return (
    <div className='flex flex-col bottom-0 space-y-8 place-items-center mt-auto pb-2'>
      <a
        href='https://github.com/josecollado'
        target='_blank'
      >
         <GitHubIcon fontSize={'default'}/>
      </a>
      <a
        href='https://www.linkedin.com/in/jose-collado/'
        target='_blank'
      >
        <LinkedInIcon fontSize={'default'}/>
      </a>
 
    </div>
  );
};

export default Links;
