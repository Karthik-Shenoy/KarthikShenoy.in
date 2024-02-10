import "./ResourceCard.css";
import { ResourceCardProps } from "./ResourceCard.props";
function ResourceCard(props: ResourceCardProps) {
  //<img src={} alt="Image Icon" className="w-20 h-20 md:w-32 md:h-32 mr-4"/>
  return (
    <>
      <div
        className="bg-beige-50 border-2 w-full border-gray-200 shadow-md p-4 m-2 transition duration-700 hover:border-beige-700 font-mono"
      >
        <div className="text-left self-center">
          <div className="font-bold text-2xl break-words">{props.title}</div>
        </div>

        <div className="mt-4 text-left">
          <p className="text-gray-700 break-words">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
