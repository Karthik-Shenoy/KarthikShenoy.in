import React from 'react'

function SideBarItem(props) {
    return (
        <>
            <li>
                <a href="#" className="p-2 border-2 border-beige-400 flex items-center hover:bg-beige-400 hover:shadow-md transition duration-500">
                    <span className="ml-3 break-words text-left">{props.content.title}</span>
                </a>
            </li>
        </>
    )
}

export default SideBarItem