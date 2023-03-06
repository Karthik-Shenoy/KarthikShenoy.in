import React from 'react'

function Folder(props) {
  return (
    <>
        <div className='m-2 flex flex-col max-w-[120px] items-center justify-center hover:cursor-pointer hover:opacity-75 hover:bg-indigo-300' onClick={props.handleClick}>
            <img className="max-w-[70px] max-h-[70px]" src="https://i.postimg.cc/WDdgc5LT/folder-ico.png"/>
            <p className={`text-${props.textColor}`}>{props.title}</p>
        </div>
    </>
  )
}

export default Folder