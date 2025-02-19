import * as React from "react";
import MainSection from "./MainSection/MainSection";
import { FlexDiv } from "../../SharedComponents/FlexBox/FlexDiv";
import { FlexItem } from "../../SharedComponents/FlexBox/FlexItem";
import { CarousalSection } from "./CarousalSection/CarousalSection";
import { AnimatedHeroSection } from "./HeroSection/HeroSection";

export const HomePage: React.FC<{}> = () => {
    return (
        <FlexDiv className="justify-center items-center gap-y-8">
            <FlexItem className="w-full">
                <AnimatedHeroSection />
            </FlexItem>
            <FlexItem>
                <MainSection />
            </FlexItem>

            <FlexItem>
                <CarousalSection />
            </FlexItem>
        </FlexDiv>
    );
};
