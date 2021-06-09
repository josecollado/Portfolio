import React from 'react';
import Typed from 'typed.js';

const MainContent = () => {
  const titleElement = React.useRef(null),
    titleRef = React.useRef(null),
    scrollElement = React.useRef(null),
    scrollRef = React.useRef(null);
  React.useEffect(() => {
    const titleString = `Hi,<br></br>I'm Jose,<br></br>Software Engineer. `;
    const likeList = [
      'Create!',
      'Problem Solve!',
      'Code!',
      'Learn!',
      'Build!',
      'Design!',
      'Explore!',
      'Skate!',
      'Cycle!',
      'Rock Climb!',
      'Hike!',
      'Help People!',
      'Make People Laugh!',
      'Make People Happy!',
    ];
    const likeStrings = likeList.map((value) => `I Like to ${value}`);
    const scrollOptions = {
      strings: ['^1000', ...likeStrings],
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
    <div>
      <div className='top-html'>{`<html>`}</div>
      <div className='top-body'>{`<body>`}</div>

      <div className='main-content'>
        <div className='opening-h1'>{`<h1>`}</div>

        <div className='title' ref={titleElement} />
        <div className='closing-h1'>{`</h1>`}</div>

        <div className='opening-h2'>{`<h2>`}</div>
        <div className='scroll-list' ref={scrollElement} />
        <div className='closing-h2'>{`</h2>`}</div>
        <div className='contact-btn'>
          <div className='opening-btn'>{`<button>`}</div>
          <button type='button'>Contact Me</button>
          <div className=' closing-btn'>{`</button>`}</div>
        </div>
      </div>
      <div className='bottom-body'>{`</body>`}</div>
      <div className='bottom-html'>{`</html>`}</div>
    </div>
  );
};

export default MainContent;
