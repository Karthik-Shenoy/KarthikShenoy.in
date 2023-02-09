import React from 'react';
import './HomePage.css'
export default function HomePage() {
    return (
        <>
            <div className="container my-24 px-6 mx-auto" id="cta-parent-div">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12" id="cta-text-div">
                            <div
                                className="bg-indigo-100 h-full rounded-lg p-6 lg:pr-12 text-black flex items-center text-center lg:text-left shadow-lg font-mono">
                                <div className="lg:pr-12">
                                    <h2 className="text-indigo-700 rounded-lg px-5 py-2 bg-white shadow-md text-2xl font-bold mb-6 font-mono">Making a Difference</h2>
                                    <p className="mb-6 pb-2 lg:pb-0 text-black font-mono text-justify">
                                        As a highly skilled and experienced software developer, I am passionate about creating top-notch applications that have a significant impact on both the user experience and the industry. I am dedicated to staying up-to-date with the latest technologies and trends, and I am always looking for new challenges and opportunities to grow and improve my skills. I am interested in designing and developing software applications that are innovative, user-friendly, and scalable. My goal is to make a meaningful difference in the field of software development by creating high-performing and impactful applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mt-12 lg:mb-0 lg:mt-0">
                            <div className="flex lg:py-12">
                                <img src="https://mdbootstrap.com/img/new/standard/city/017.jpg" className="w-full rounded-lg shadow-lg"
                                    id="cta-img-nml-x" alt="" />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div className="flex lg:py-12">
                                <img src="https://i.postimg.cc/RZ9ZqsFx/growth.jpg" className="w-full rounded-lg shadow-lg"
                                    id="cta-img-nml-50" alt="" />
                            </div>
                        </div>

                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div
                                className="bg-indigo-100 h-full rounded-lg p-6 lg:pl-12 text-black flex items-center text-center lg:text-left shadow-lg font-mono">
                                <div className="lg:pl-12">
                                    <h2 className="rounded-lg px-5 py-2 bg-white shadow-md text-2xl font-bold mb-6">Continuous Growth: My Current Skillset</h2>
                                    <p className="mb-6 pb-2 lg:pb-0">
                                        Committed to staying current with industry trends and advancements in software development. Continual growth is emphasized through active seeking of opportunities to learn new skills and improve existing ones.
                                    </p>

                                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                        <p className="rounded-lg px-5 py-2 bg-white shadow-md flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <i className="fas fa-code pr-2"></i>
                                            Full-Stack
                                        </p>

                                        <p className="rounded-lg px-5 py-2 bg-white shadow-md flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <i className="fas fa-database pr-2"></i>
                                            DSA
                                        </p>

                                        <p className="rounded-lg px-5 py-2 bg-white shadow-md flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                            <i class="fas fa-brain pr-2"></i>
                                            Deep Learning
                                        </p>
                                    </div>

                                    <p>
                                        Adaptability and openness to new technologies are essential for staying competitive in the field of software development. A strong track record of taking on new challenges and continuously improving skills is needed, allowing for the creation of better and more impactful software applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}