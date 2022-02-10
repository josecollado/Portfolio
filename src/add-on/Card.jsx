import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ProjectCard = ({ projectName, projectFrontImage, bodyText }) => {
  const settings = {
    maxWidth: 600,
    backgroundColor: '#cbd5e1',
    borderRadius: '2%',
    margin:'auto',
    marginTop: '250px',
    padding: '10px',
    paddingBottom: '25px',
    
  };
  return (
    <div >
      <Card sx={settings}> 
        <CardActionArea>
          <CardMedia
            component='img'
            image={projectFrontImage}
            alt={`${projectName}`}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
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
