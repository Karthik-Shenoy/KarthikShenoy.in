import React from 'react'

function Folder(props) {
  const redirect = () => {
    window.location.assign(props.link);
  }

  return (
    <>
        <div className='m-2 flex flex-col max-w-[120px] items-center justify-center hover:cursor-pointer hover:opacity-75 hover:bg-indigo-300' onClick={props.link ? redirect : props.handleClick}>
            <img className="w-[70px] h-[70px] max-w-[70px] max-h-[70px]" src={ props.image || "https://i.postimg.cc/WDdgc5LT/folder-ico.png"}/>
            <p className={`text-${props.textColor}`}>{props.title}</p>
        </div>
    </>
  )
}

export default Folder