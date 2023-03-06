import React, { useEffect, useState } from 'react'

function SkillBadge(props) {
    const [animate, setAnimate] = useState(false);
    const { image, name } = props
    useEffect(() => {
        const myDiv = document.getElementById(`skill-badge-${name}`);

        const handleScroll = () => {
            const isHover = e => e.parentElement.querySelector(':hover') === e;
            document.addEventListener('mousemove', function checkHover() {
                const hovered = isHover(myDiv);
                if (hovered !== checkHover.hovered) {
                    checkHover.hovered = hovered;
                    setAnimate(hovered)
                }
            });
        };
        
        myDiv.addEventListener('mouseover', handleScroll);
        return () => myDiv.removeEventListener('mouseover', handleScroll);
    }, [name]);

    return (
        <>
            <div className="m-1 flex flex-col">
                <div className={`w-20 h-20 bg-gray-800 rounded-full flex overflow-hidden justify-center ${animate ? "animate-wiggle" : ""}`} id={`skill-badge-${name}`}>
                    <img className="w-2/3 h-2/3 self-center" src={image} alt="Logo" />
                </div>
                <p className={`opacity-0 text-gray-800 font-mono font-bold text-2xl typewriter ${animate ? "animate-fade-in" : ""}`}>{name}</p>
            </div>
        </>
    );
}

export default SkillBadge