import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, duration } from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';




export const ProjectCard = ({
  projectName,
  projectFrontImage,
  bodyText,
  url,
}) => {
  const settings = {
    backgroundColor: '#cbd5e1',
    borderRadius: '25px',
    padding: '35px',
    paddingBottom: '25px',
  };
 
  return (
    <div>
      <Card sx={settings}   >
        <div className=' inline-flex'>
          <CardMedia
            component='img'
            image={projectFrontImage}
            alt={`${projectName}`}
            style={{ borderRadius: '20px', width: '600px'}}
            className=' md:h-60 '
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
      </Card>
    </div>
  );
};
