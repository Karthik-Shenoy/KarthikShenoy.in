import React, {useEffect, useState} from 'react'

function HpcSecond() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('cta-parent-div-2');
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            setAnimate(isVisible);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`container mb-8 px-6 self-center ${ animate ? "transform animate-slide-right" : "" }`} id="cta-parent-div-2">
                <section className="mb-32">
                    <div className="flex flex-wrap max-[769px]:flex-col-reverse">
                        <div className="basis-auto w-full md:w-5/12 mb-12 md:mb-0 flex">
                            <div className="flex max-[769px]:pt-10  self-center">
                                <img src="https://i.postimg.cc/RZ9ZqsFx/growth.jpg" className="w-full rounded-lg shadow-lg"
                                    id="cta-img-nml-50" alt="" />
                            </div>
                        </div>

                        <div className="grow-0 shrink-0 basis-auto w-full md:w-7/12 font-mono">
                            <div
                                className="bg-beige-200 h-full rounded-lg p-6 md:pl-12 text-black flex items-center text-center md:text-left shadow-lg font-mono">
                                <div className="md:pl-12">
                                    <h2 className="rounded-lg px-5 py-2 bg-white shadow-md text-2xl font-bold mb-6">Continuous Growth: My Current Skillset</h2>
                                    <p className="mb-6 pb-2 md:pb-0 text-black text-justify">
                                        Committed to staying current with industry trends and advancements in software development. Continual growth is emphasized through active seeking of opportunities to learn new skills and improve existing ones.
                                    </p>

                                    <div className="flex flex-col lg:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                        <p className="rounded-lg px-5 py-2 bg-white shadow-md flex items-center mb-4 md:mb-2 md:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <i className="fas fa-code pr-2"></i>
                                            Full-Stack
                                        </p>

                                        <p className="rounded-lg px-5 py-2 bg-white shadow-md flex items-center mb-4 md:mb-2 md:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <i className="fas fa-database pr-2"></i>
                                            DSA
                                        </p>

                                        <p className="rounded-lg px-5 py-2 bg-white shadow-md flex items-center mb-2 md:mb-0 mx-auto md:mx-0">
                                            <i className="fas fa-brain pr-2"></i>
                                            Deep Learning
                                        </p>
                                    </div>

                                    <p className="text-black text-justify">
                                        Adaptability and openness to new technologies are essential for staying competitive in the field of software development. A strong track record of taking on new challenges and continuously improving skills is needed, allowing for the creation of better and more impactful software applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HpcSecond