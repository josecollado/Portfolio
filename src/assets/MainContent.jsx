import React from 'react';
import Typed from 'typed.js';
import {Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';

const MainContent = () => {
  const titleElement = React.useRef(null),
    titleRef = React.useRef(null),
    scrollElement = React.useRef(null),
    scrollRef = React.useRef(null);
  React.useEffect(() => {
    const titleString = `Hi,<br/>I'm Jose,<br/>Software Engineer. `;
    const likeList = [
      'Create!',
      'Problem Solve!',
      'Code!',
      'Learn!',
      'Build!',
      'Design!',
      'Explore!',
      'Play Sports!',
      'Skate!',
      'Cycle!',
      'Rock Climb!',
      'Hike!',
      'Ride Motorcycles!',
      'Play with Cats and Dogs!',
      'Make Music!',
      'Help People!',
      'Make People Laugh!',
      'Make People Happy!',
    ];
    const likeStrings = likeList.map((value) => `I Like to ${value}`);
    const scrollOptions = {
      strings: ['^1100', ...likeStrings],
      typeSpeed: 40,
      backSpeed: 50,
      smartBackspace: true,
      showCursor: false,
    };
    const titleOptions = {
      strings: [titleString],
      typeSpeed: 40,
      showCursor: false,
    };

    titleRef.current = new Typed(titleElement.current, titleOptions);
    scrollRef.current = new Typed(scrollElement.current, scrollOptions);
    return () => {
      titleRef.current.destroy();
      scrollRef.current.destroy();
    };
  }, []);

  return (
    <div className=' min-h-screen '>
      <div className='html-tag pl-5 animate'>{`<html>`}</div>
      <div className=' html-tag pl-8 top-0 mb-auto pb-10 animate '>{`<body>`}</div>

      <div className=' '>
        <div className='html-tag mt-36 pl-6 animate'>{`<h1>`}</div>
        <div className=' pl-9 main  text-6xl m-3' ref={titleElement} />
        <div className='html-tag pl-6 animate'>{`</h1>`}</div>
        <div className='html-tag pl-5 animate'>{`<h2>`}</div> 
        <div className='pl-14 main text-lg m-3' ref={scrollElement} />
        <div className='html-tag mb-20 pl-5  animate'>{`</h2>`}</div>
        <div className='pl-20 html-tag animate'>{`<button>`}</div>
        <div className=' ml-28 m-3 main'>
          <Button variant='outlined' ><strong>Get In Touch</strong></Button>
        </div>
        <div className='pl-20 html-tag animate'>{`</button>`}</div>
      </div>

      <div className=' html-tag pt-16 mb-auto bottom-0 pl-8 animate'>{`</body>`}</div>
      <div className=' html-tag mb-auto bottom-0 pl-5 animate' >{`</html>`}</div>
    </div>
  );
};

export default MainContent;
