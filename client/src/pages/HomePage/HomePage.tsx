import * as React from "react";
import MainSection from "./MainSection/MainSection";
import { FlexDiv } from "../../SharedComponents/FlexBox/FlexDiv";
import { FlexItem } from "../../SharedComponents/FlexBox/FlexItem";
import { CarousalSection } from "./CarousalSection/CarousalSection";


export const HomePage: React.FC<{}> = () => {
    return (
        <FlexDiv className="justify-center items-center gap-y-8">
            <FlexItem>
                <MainSection />
            </FlexItem>
            
            <FlexItem>
                <CarousalSection />
            </FlexItem>
        </FlexDiv>
    );
};
