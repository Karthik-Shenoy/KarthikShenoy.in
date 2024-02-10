import "./ResourceCard.css"
import { ResourceCardProps } from "./ResourceCard.props"
function ResourceCard(props: ResourceCardProps) {
    //<img src={} alt="Image Icon" className="w-20 h-20 md:w-32 md:h-32 mr-4"/>
    return (
        <>

            <a href={`/resources/single?id=${props.linkParam}`} className="bg-beige-50 res-card border-2 border-gray-200 shadow-md p-4 m-2 transition duration-700 hover:border-beige-700 font-mono">
                <div className="flex align-items: center flex-col sm:flex-row ">
                    <div className="flex-shrink-0 align-middle self-center sm:self:auto">
                        <img src={props.image} alt="Icon" className="h-24 w-28"/>
                    </div>
                    <div className="text-center sm:text-left align-middle mt-5 ml-0 sm:ml-5 self-center sm:self:auto">
                        <div className="font-bold text-xl break-words">{props.title}</div>
                    </div>
                </div>
                <div className="mt-4 text-justify">
                    <p className="text-gray-700 break-words">
                        {props.description}
                    </p>
                </div>
            </a>

        </>
    )
}


export default ResourceCard