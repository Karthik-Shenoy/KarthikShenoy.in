import  { useEffect, useState } from 'react'
import { SkillBadgeProps } from './SkillBadge.props';


function SkillBadge(props: SkillBadgeProps) {
    const [animate, setAnimate] = useState(false);
    const { imageUrl, name } = props
    useEffect(() => {
        setAnimate(true);
        
    }, []);

    return (
        <>
            <div className="m-1 flex flex-col">
                <div className={`w-20 h-20 bg-gray-800 rounded-full flex overflow-hidden justify-center ${animate ? "animate-wiggle" : ""}`} id={`skill-badge-${name}`}>
                    <img className="w-2/3 h-2/3 self-center" src={imageUrl} alt="Logo" />
                </div>
                <p className={`opacity-0 text-gray-800 font-mono font-bold text-2xl typewriter ${animate ? "animate-fade-in" : ""}`}>{name}</p>
            </div>
        </>
    );
}

export default SkillBadge