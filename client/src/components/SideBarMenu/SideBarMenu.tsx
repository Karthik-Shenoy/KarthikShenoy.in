import React from 'react'
import SideBarItem from './SideBarItem';
import "./SideBarMenu.css"
function SideBarMenu(props) {
    const render_list = props.data.map((item, index) => {
        return (
            <>
                <SideBarItem key={index} content={item}/>
            </>
        );
    });
    return (
        <>
            <aside id="logo-sidebar" className="m-0.5 fiexed left-0 z-0 w-64 h-vh font-mono text-black shadow-lg sd-bar-menu" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-beige-50">
                    <ul className="space-y-2">
                        {render_list}
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default SideBarMenu;