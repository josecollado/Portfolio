import React , {useState}from 'react';
import Typed from 'typed.js';
import {Button } from '@material-ui/core'
import {ContactModal} from '../add-on/Modal'

const MainContent = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
    <div className=' min-h-full '>
      <div className='html-tag pl-5 animate'>{`<html>`}</div>
      <div className=' html-tag pl-8 top-0  animate '>{`<body>`}</div>

      <div className=' '>
        <div className='html-tag mt-36 pl-6 animate'>{`<h1>`}</div>
        <div className=' pl-9 main  text-6xl m-3' ref={titleElement} />
        <div className='html-tag pl-9 animate'>{`</h1>`}</div>
        <div className='html-tag pl-5 animate'>{`<h2>`}</div> 
        <div className='pl-14 main text-lg m-3' ref={scrollElement} />
        <div className='html-tag mb-10 pl-8 animate'>{`</h2>`}</div>
        <div className='pl-20 html-tag animate'>{`<button>`}</div>
        <div className=' ml-28 m-3 main'>
          <Button variant='outlined' onClick={handleOpen} ><strong>Get In Touch</strong></Button>
          <ContactModal open={open} handleClose={handleClose} />
        </div>
        <div className=' pl-24 html-tag animate'>{`</button>`}</div>
      </div>

      <div className=' m-auto html-tag pb-3  pl-8 animate'>{`</body>`}</div>
      <div className='m-auto html-tag pl-5 animate ' >{`</html>`}</div>
    </div>
  );
};

export default MainContent;
