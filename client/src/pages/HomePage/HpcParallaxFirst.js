import React from 'react'
import Parallax from './Parallax'
import SkillBadge from './SkillBadge'

// https://i.postimg.cc/3k64bHbC/react.pn
function HpcParallaxFirst() {
    return (
        <>
            <Parallax image="https://i.postimg.cc/SNn68cdq/background.webp">
                <div className="flex items-center flex-col">
                    <h1 className="text-white text-8xl font-mono font-bold mb-3">Karthik Shenoy</h1>
                    <p className="text-black font-mono font-bold text-2xl">Full stack web developer | Tech enthusiast.</p>
                    <div className="max-w-[352px] max-h-[120px] flex items-center flex-row mt-3 mx-5">
                        <SkillBadge image="https://i.postimg.cc/3k64bHbC/react.png" name="React" direction="left"/>
                        <SkillBadge image="https://i.postimg.cc/HrhfRSmC/c.png" name="C++" direction="left"/>
                        <SkillBadge image="https://i.postimg.cc/ctTsnQn4/node-js.png" name="NodeJs" direction="right"/>
                        <SkillBadge image="https://i.postimg.cc/Jt7G5q1Q/python.png" name="Python" direction="right"/>
                    </div>
                </div>

            </Parallax>
        </>
    )
}

export default HpcParallaxFirst