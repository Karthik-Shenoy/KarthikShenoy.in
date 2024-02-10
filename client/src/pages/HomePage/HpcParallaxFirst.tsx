
import Parallax from './Parallax/Parallax'
import SkillBadge from './SkillBadge/SkillBadge'

// https://i.postimg.cc/3k64bHbC/react.pn
function HpcParallaxFirst() {
    return (
        <>
            <Parallax imageUrl="https://i.postimg.cc/SNn68cdq/background.webp">
                <div className="flex items-center flex-col">
                    <h1 className="text-white text-8xl font-mono font-bold mb-3">Karthik Shenoy</h1>
                    <p className="text-black font-mono font-bold text-2xl">Full stack web developer | Tech enthusiast.</p>
                    <div className="max-w-[352px] max-h-[120px] flex items-center flex-row mt-3 mx-5">
                        <SkillBadge imageUrl="https://i.postimg.cc/3k64bHbC/react.png" name="React"/>
                        <SkillBadge imageUrl="https://i.postimg.cc/HrhfRSmC/c.png" name="C++"/>
                        <SkillBadge imageUrl="https://i.postimg.cc/ctTsnQn4/node-js.png" name="NodeJs" />
                        <SkillBadge imageUrl="https://i.postimg.cc/Jt7G5q1Q/python.png" name="Python"/>
                    </div>
                </div>
            </Parallax>
        </>
    )
}

export default HpcParallaxFirst