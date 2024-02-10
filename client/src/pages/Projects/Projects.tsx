import React, { useState } from 'react'
import Folder from './Folder';
import Window from './Window';
import "./Projects.css"
export default function Projects() {
    const [showWindow, setShowWindow] = useState(false);

    const handleClick = () => {
        setShowWindow(true);
    };

    const closeClick = () => {
        const window_component = document.querySelector("#window_component");
        window_component.className += " animate-fade-out";
        setTimeout(() => { setShowWindow(false); }, 250);

    };

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros."
    const arr = [{
        title: "Computer Vision Sudoku Solver",
        description: lorem,
        image: "https://i.postimg.cc/nMWSd4KF/neural.png",
        techStack: ["python", "tensorflow", "keras"]
    },
    {
        title: "Pathfinding visualizer",
        description: lorem,
        image: "https://i.postimg.cc/449y1f55/networking.png",
        techStack: ["python", "tkinter"]
    },
    {
        title: "Coder Connect",
        description: lorem,
        image: "https://i.postimg.cc/YC9wb87H/operational-system.png",
        techStack: ["python", "Django", "html"]
    }]

    const render_list = arr.map((item, index) => {
        return <Folder key={index} title={item.title} description={item.description} techStack={item.techStack} handleClick={handleClick} textColor="white" />
    });

    setInterval(updateTime, 1000);
    return (
        <div className="w-screen flex flex-col flex-grow">
            <div className='bg-teal-700 w-sceen flex-grow relative overflow-hidden'>
                <div className="flex items-start">
                    {render_list}
                </div>
                {showWindow && (
                    <Window closeClick={closeClick} techStack={["python", "Django", "html"]}/>
                )}
            </div>
            <div className='items-center max-h-[50px] bg-gray-200 border-gray-900 border-2 flex-grow flex'>

                <div className="m-1 items-center w-[100px] max-w-[100px] grow-0 flex h-[90%] bg-gray-300 border-[2px] border-gray-400 hover:bg-gray-400 hover:border-gray-500">
                    <div className="w-[35px] h-[25px] flex">
                        <img className="w-[35px] h-[20px] self-center" src="https://i.postimg.cc/t7rx24sJ/win95-logo.png" alt="icon" />
                    </div>
                    <p className='max-[770px]:mr-3 font-mono font-bold'>
                        Start
                    </p>
                </div>

                <div className='flex-grow'>

                </div>

                <div className='flex items-center justify-center time-box flex-grow h-[70%] w-[85px] max-w-[85px] m-1 bg-gray-300 border-[2px] border-gray-400 font-mono font-bold'>

                </div>

            </div>
        </div>
    )
}

function updateTime() {
    var today = new Date();
    var hours24 = today.getHours();
    var hours12;
    var minutes = today.getMinutes();
    var suffix = '';

    if (hours24 >= 12) {
        suffix = " PM";
        hours12 = hours24 % 12;
    } else {
        suffix = " AM";
        hours12 = hours24;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var time = hours12 + ":" + minutes + suffix;

    var timeBox = document.querySelector(".time-box");
    if (timeBox !== null)
        timeBox.innerHTML = time;
}

