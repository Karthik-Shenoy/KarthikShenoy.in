import React, {useEffect, useState} from 'react'

function HpcFirst() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('cta-parent-div-1');
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            setAnimate(isVisible);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`container mt-24 px-6 self-center ${ animate ? "transform animate-slide-left" : "" }`} id="cta-parent-div-1">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-7/12" id="cta-text-div">
                            <div
                                className="bg-beige-200 h-full rounded-lg p-6 md:pr-12 text-black flex items-center text-center md:text-left shadow-lg font-mono">
                                <div className="md:pr-12">
                                    <h2 className="text-black rounded-lg px-5 py-2 bg-white shadow-md text-2xl font-bold mb-6 font-mono">Making a Difference</h2>
                                    <p className="m-6 p-2 md:pb-0 text-black font-mono text-justify">
                                        As a software developer, I love making great apps that are easy to use and have a big impact. I always try to learn about the newest technology and find new challenges to grow my skills. My goal is to make good software that helps people and makes a difference in the world of tech. I know that building software is a team effort and I approach every project with a humble and open mind, eager to work with others to make the best app possible. My hope is to contribute to the world of software development by making helpful and effective apps.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 mt-12 md:mb-0 md:mt-0 flex">
                            <div className="flex py-10 self-center">
                                <img src="https://mdbootstrap.com/img/new/standard/city/017.jpg" className="w-full rounded-lg shadow-lg"
                                    id="cta-img-nml-x" alt="" />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default HpcFirst