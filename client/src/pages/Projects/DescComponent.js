import React, { useRef } from 'react'
import Draggable from 'react-draggable';
function DescComponent(props) {
    const nodeRef = useRef(null);

    const render_list = props.techStack.map((item, index) => {
        return (
            <>
                <p key={index} className="text-black p-2 bg-gray-300 shadow-md flex items-center m-2">
                    <i className="fab fa-python mr-2"></i>
                    {item}
                </p>
            </>
        )
    });

    return (
        <>
            <Draggable>
                <div className="m-auto max-w-[700px] max-h-[400px] absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center" ref={nodeRef}>
                    <div className="w-[700px] h-[400px] bg-white flex flex-col border-2 border-gray-500 shadow-lg" id="desc_component">

                        <div className='w-full bg-gray-300 max-h-[30px] border-2 border-gray-500 shadow-lg flex flex-grow items-center justify-end'>
                            <div className='w-[25px] max-w-[25px] h-[25px] bg-red-700 text-white text-md border-2 border-gray-500 flex items-center justify-center hover:cursor-pointer hover:bg-red-500' onClick={props.closeClick}>
                                <p>X</p>
                            </div>
                        </div>

                        <div className='flex flex-col flex-grow justify-items-center items-center justify-self-center overflow-y-scroll overflow-x-scroll'>
                            <div className='max-w-[150px] max-h-[150px] flex self-center'>
                                <img className="max-w-[150px] max-h-[150px]" src="https://i.postimg.cc/k68vLhfn/coding.png" />
                            </div>
                            <div className="max-w-[600px] flex justify-center justify-self-center">
                                <p className="break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.
                                </p>
                            </div>
                            <div className='w-full m-3 flex flex-row justify-center'>
                                {render_list}
                            </div>
                        </div>


                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default DescComponent