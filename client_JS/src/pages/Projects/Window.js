import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable';
import Folder from './Folder';
import DescComponent from './DescComponent';

function Window(props) {
  const nodeRef = useRef(null);
  const [showDesc, setShowDesc] = useState(null);

  const handleClick = () => {
    setShowDesc(true);
  }
  const closeClick = () => {
    const desc_component = document.querySelector("#desc_component");
    desc_component.className += " animate-fade-out";
    setTimeout(() => { setShowDesc(false); }, 250);


  }
  return (
    <>
    <Draggable nodeRef={nodeRef}>
      <div className="max-w-[700px] max-h-[400px] absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" ref={nodeRef}>
        <div className="w-[700px] h-[400px] bg-white flex flex-col border-2 border-gray-500 shadow-lg items-start" id="window_component">

          <div className='w-full bg-gray-300 max-h-[30px] border-2 border-gray-500 shadow-lg flex items-center justify-end'>
            <div className='w-[25px] h-[25px] bg-red-700 text-white text-md border-2 border-gray-500 flex items-center justify-center hover:cursor-pointer hover:bg-red-500' onClick={props.closeClick}>
              <p>X</p>
            </div>
          </div>
          
          <div className="flex flex-row m-3 items-start">
            <Folder title="description" handleClick={handleClick} textColor="black" image="https://i.postimg.cc/N9QN1QR6/description.png"/>
            <Folder title="git repository link" handleClick={handleClick} textColor="black" image="https://i.postimg.cc/pmf069VN/github-logo.png" link="https://github.com/Karthik-Shenoy/Data_Structures_And_Algorithms"/>
          </div>
        </div>
      </div>
    </Draggable>
    {showDesc && <DescComponent closeClick={closeClick} techStack={props.techStack} />}
    </>
  )
}

export default Window