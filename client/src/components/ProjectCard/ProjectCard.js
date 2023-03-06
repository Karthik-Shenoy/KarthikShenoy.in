import React from 'react'

function ProjectCard({ title, description, image, techStack }) {
    const render_list = techStack.map((item, index) => {
        return (
            <>
                <p key ={index} className="text-beige-800 rounded-lg  p-1.5 bg-white shadow-md flex items-center mb-2 mx-auto">
                    <i className="fab fa-python mr-2"></i>
                    {item}
                </p>
            </>
        )
    });

    return (
        <>
            <a href="/resources/:resid" className=" bg-beige-50 res-card border-2 border-gray-200 shadow-md p-4 m-2 transition duration-700 hover:border-beige-700 font-mono">
                <div className="flex align-items: center flex-col sm:flex-row">
                    <div className="flex-shrink-0 align-middle self-center sm:self:auto">
                        <img src={image} alt="Icon" className="h-24 w-28" />
                    </div>
                    <div className="text-center sm:text-left align-middle mt-5 ml-0 sm:ml-5 self-center sm:self:auto">
                        <div className="font-bold text-xl break-words">{title}</div>
                    </div>
                </div>
                <div className="mt-4 text-justify">
                    <p className="text-gray-700 break-words">
                        {description}
                    </p>
                </div>
                <div className='mt-5 flex flex-wrap justify-left'>
                    {render_list}
                </div>
            </a>
        </>
    )
}

export default ProjectCard