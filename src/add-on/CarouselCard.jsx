import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';
import Lottie from 'lottie-react';
import computer from '../lotties/computer.json'


export const ProjectCard = ({
  projectName,
  projectFrontImage,
  bodyText,
  url,
}) => {
  const settings = {
    backgroundColor: '#cbd5e1',
    borderRadius: '5px',
    padding: '35px',
    paddingBottom: '25px',
  };
 
  return (
    <div>
      <Card sx={settings}>
        <CardActionArea>
        <div className=' inline-flex'>
          <CardMedia
            component='img'
            image={projectFrontImage}
            alt={`${projectName}`}
            style={{ borderRadius: '20px', width: '600px' }}
            className=' md:h-60  '
          />
        <Lottie
          animationData={computer}
          autoPlay={true}
          loop={true}
          className='w-2/3 md:hidden lg:flex lg:ml-5'
        />
        </div>
          <CardContent>
            <a href={url} target='_blank'>
              <GitHubIcon fontSize={'default'} />
            </a>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='py-5 '
            >
              {projectName}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {bodyText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
