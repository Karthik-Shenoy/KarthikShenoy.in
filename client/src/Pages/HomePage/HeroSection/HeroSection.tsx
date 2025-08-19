import * as React from "react";
import { FlexDiv } from "../../../SharedComponents/FlexBox";
import { LetterGlitch } from "@react-bits/LetterGlitch"

export const AnimatedHeroSection: React.FC = () => {

    return (

        <div className="w-full desktop:min-h-[35vw] min-h-[90vw] relative rounded-3xl border-primary border-[0.5px]">
            <LetterGlitch
                glitchSpeed={100}
                smooth={true}
                centerVignette={true}
                outerVignette={true}
                className="absolute top-0 left-0 z-0 h-full w-full rounded-3xl"
                glitchColors={["#ff0000", "#ff8c00", "#8a2be2"]}
            />
            <FlexDiv className="absolute top-0 left-0 z-10 w-full h-full justify-center items-center font-sans p-4 gap-y-2 backdrop-blur-[0.5px]">
                <h1
                    className="desktop:text-6xl text-2xl desktop:pb-1 pb-[1px] bg-transparent text-white font-bold"
                >Karthik Shenoy</h1>
                <span className="desktop:text-2xl text-[16px] text-white desktop:text-center text-center">
                    Scaling systems, growing muscles, and sometimes growing up.
                    <br /> I chase PRs in both bench presses and in complex projects
                </span>
            </FlexDiv>
        </div>

    );
};
