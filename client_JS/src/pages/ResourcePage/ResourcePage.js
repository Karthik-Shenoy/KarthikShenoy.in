import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import SideBarMenu from '../../components/SideBarMenu/SideBarMenu';
import MainResourcePage from "./MainResourcePage";
import './ResourcePage.css'
import SingleResourceView from "./SingleResourceView"

function ResourcePage() {
    const [resources, setResources] = useState([]);
    const location = useLocation();
    useEffect(() => {
        // Define async function
        const fetchResources = async () => {
            try {
                // Send GET request using fetch
                const response = await fetch("/resources");
                // Check if response is ok
                if (response.ok) {
                    // Parse response as JSON
                    const data = await response.json();
                    // Update state with users
                    setResources(data);
                } else {
                    // Throw error if response is not ok
                    throw new Error("Something went wrong");
                }
            } catch (err) {
                // Handle error
                console.error(err);
            }
        };
        // Call async function
        fetchResources();
    }, []);

    const render_list = resources.map((item, index) => {
        const objectId = (item._id).toString();
        return <ResourceCard key={index} title={item.title} description={item.description} image={item.image} linkParam={item._id} />
    });
    return (
        <div className="flex">
            <SideBarMenu data={resources} />
            {(location.pathname === "/resources") && <MainResourcePage />}
            {(location.pathname === "/resources/single") && <SingleResourceView />}
        </div>
    )
}

export default ResourcePage;