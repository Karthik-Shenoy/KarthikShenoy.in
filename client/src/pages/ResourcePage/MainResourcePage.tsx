import React, { useEffect, useState } from 'react'
import ResourceCard from '../../components/ResourceCard/ResourceCard';

function MainResourcePage() {
    const [resources, setResources] = useState([]);
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
        <>
            <div className='w-5/6 px-5 py-10 flex flex-wrap justify-center resource-card-container'>
                {render_list}
            </div>
        </>
    )
}

export default MainResourcePage