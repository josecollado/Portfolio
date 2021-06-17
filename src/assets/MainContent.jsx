import React from 'react';
import Typed from 'typed.js';

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
      'Play with Cats & Dogs!',
      'Make Music!',
      'Help People!',
      'Make People Laugh!',
      'Make People Happy!',
    ];
    const likeStrings = likeList.map((value) => `I Like to ${value}`);
    const scrollOptions = {
      strings: ['^1100', ...likeStrings],
      typeSpeed: 40,
      backSpeed: 30,
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
    <div className=' h-full border-black border-solid border-4'>
      <div >{`<html>`}</div>
      <div className=' flex flex-col top-0 mb-auto border-white border-4'>{`<body>`}</div>

      <div className=' border-blue-800 border-solid border-4'>
        <div className='mt-28'>{`<h1>`}</div>
        <div className=' border-black border-solid border-4' ref={titleElement} />
        <div>{`</h1>`}</div>
        <div>{`<h2>`}</div>
        <div ref={scrollElement} />
        <div className='mb-20'>{`</h2>`}</div>
        <div className='flex flex-col mt-48'>{`<button>`}</div>
        <button>Contact Me</button>
        <div>{`</button>`}</div>
      </div>

      <div className=' flex flex-col bottom-0 mt-auto border-white border-4'>{`</body>`}</div>
      <div >{`</html>`}</div>
    </div>
  );
};

export default MainContent;
