import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ResourceCard from '../../../components/ResourceCard/ResourceCard';


function SingleResourceView(props) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const resourceId = searchParams.get("id");
  const [resource, setResource] = useState([]);
  useEffect(() => {
    // Define async function
    const fetchResources = async () => {
      try {
        // Send GET request using fetch
        const response = await fetch(`/resources/${resourceId}`);
        // Check if response is ok
        if (response.ok) {
          // Parse response as JSON
          const data = await response.json();
          // Update state with users
          setResource(data[0]);
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

  console.log(resource.sub_topics);
  let render_list = []
  if (resource.sub_topics) {
    render_list = resource.sub_topics.map((item, index) => {
      //const objectId = (item._id).toString();
      return <ResourceCard key={index} title={item.title} description={item.description} image={item.image} linkParam={item._id} />
    });
  }
  return (
      <div className='w-5/6 px-5 py-10 flex flex-wrap justify-center resource-card-container'>
        {render_list}
      </div>
  )
}

export default SingleResourceView