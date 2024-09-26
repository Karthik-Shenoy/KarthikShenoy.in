import { FlexDiv } from "../../../SharedComponents/FlexBox/FlexDiv";
import { Carousal } from "../../../SharedComponents/Carousal/Carousal";
import { dummyYoutubeContent } from "../../../AppComponents/YoutubeCard/DummyYoutubeContent";
import { YoutubeCard } from "../../../AppComponents/YoutubeCard/YoutubeCard";
import { FlexItem } from "../../../SharedComponents/FlexBox/FlexItem";
import { Title } from "../../../AppComponents/Typography/Typography";


export const CarousalSection: React.FC = () => {
    const carousalItems = dummyYoutubeContent.map((content) => {
        return <YoutubeCard {...content} className=""/>
    });
    return (

        <FlexDiv className="justify-center items-center gap-y-4">
            <FlexItem className="justify-self-start self-start">
                <Title text={"Recent Youtube Posts"} />
            </FlexItem>
            <Carousal carousalItems={carousalItems}/>
        </FlexDiv>
    );
};
