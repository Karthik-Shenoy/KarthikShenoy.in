import React from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shadcn-ui/components/ui/card";
import { FlexDiv } from "../../../SharedComponents/FlexBox/FlexDiv";
import { FlexItem } from "../../../SharedComponents/FlexBox/FlexItem";
import { BadgeWrapper } from "../../../SharedComponents/Badges/Badge";
import { GridDiv } from "../../../SharedComponents/Grid/GridDiv";
import { Title } from "../../../AppComponents/Typography";

const StringsManager = {
    HeroMainSectionTitle: "Bits About Me",
    InterestsSectionTitle: "My Interests",
};

const MainSection: React.FC = () => {
    const [title, setTitle] = React.useState<string>(StringsManager.HeroMainSectionTitle);
    const [interestsSectionTitle, setInterestsSectionTitle] = React.useState<string>(
        StringsManager.InterestsSectionTitle
    );
    const intervalCallbackRef = React.useRef<NodeJS.Timeout>();

    const titleMouseEnterHandler = React.useCallback(
        (title: string, setTitle: React.Dispatch<React.SetStateAction<string>>) => {
            randomBinaryFillerAnimation(title, setTitle, intervalCallbackRef);
        },
        []
    );

    const titleMouseLeaveHandler = React.useCallback(
        (title: string, setTitle: React.Dispatch<React.SetStateAction<string>>) => {
            console.log("Mouse Leave", title);
            if (intervalCallbackRef.current) {
                clearInterval(intervalCallbackRef.current);
            }
            setTitle(title);
        },
        []
    );

    React.useEffect(() => {
        // Cleanup
        return () => {
            if (intervalCallbackRef.current) {
                clearInterval(intervalCallbackRef.current);
            }
        };
    }, []);

    return (
        <FlexDiv className="desktop:gap-x-10 gap-y-10 desktop:flex-row flex-col items-center justify-center p-[10px]">
            <FlexItem className="desktop:w-11/12">
                <Card className="shadow-lg desktop:px-5 border-[0px]">
                    <CardHeader>
                        <CardTitle>
                            <Title
                                text={title}
                                className="pb-1 hover:text-primary"
                                onMouseEnter={() => titleMouseEnterHandler(title, setTitle)}
                                onMouseLeave={() => {
                                    titleMouseLeaveHandler(
                                        StringsManager.HeroMainSectionTitle,
                                        setTitle
                                    );
                                }}
                            />
                        </CardTitle>
                        <CardDescription className="desktop:text-lg text-sm flex flex-col gap-y-4 text-justify ">
                            <span>
                                I’m passionate about diving deep into the inner workings of complex
                                software systems, analyzing their implementation, and understanding
                                the design decisions, trade-offs, and different approaches from a
                                first principles perspective. I enjoy thinking about how I might
                                have implemented the system differently or improved it. When a
                                system truly intrigues me, I often rebuild it from scratch to gain a
                                deeper understanding, and sometimes I share my insights through
                                posts or videos.
                            </span>
                            <span>
                                I believe in designing systems that are simple, clean, and
                                adaptable, ensuring they remain flexible and maintainable while
                                prioritizing key principles like performance, reliability,
                                scalability, and security.
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <FlexDiv className="desktop:gap-x-4 gap-y-4 desktop:flex-row flex-col">
                            <FlexItem>
                                <Title
                                    className="desktop:text-xl text-md w-fit hover:text-primary duration-300 pb-[1px]"
                                    onMouseEnter={() =>
                                        titleMouseEnterHandler(
                                            interestsSectionTitle,
                                            setInterestsSectionTitle
                                        )
                                    }
                                    onMouseLeave={() =>
                                        titleMouseLeaveHandler(
                                            StringsManager.InterestsSectionTitle,
                                            setInterestsSectionTitle
                                        )
                                    }
                                    text={interestsSectionTitle}
                                />
                            </FlexItem>
                            <FlexItem>
                                <GridDiv className="desktop:grid-cols-6 grid-cols-2 ">
                                    <BadgeWrapper>C++</BadgeWrapper>
                                    <BadgeWrapper>TypeScript</BadgeWrapper>
                                    <BadgeWrapper>Go</BadgeWrapper>
                                    <BadgeWrapper>Rust</BadgeWrapper>
                                    <BadgeWrapper>Distributed Systems</BadgeWrapper>
                                </GridDiv>
                            </FlexItem>
                        </FlexDiv>
                    </CardFooter>
                </Card>
            </FlexItem>
        </FlexDiv>
    );
};

export default MainSection;

/**
 * launches a random binary filler animation on the given title
 */
const randomBinaryFillerAnimation = (
    title: string,
    setTitleCallback: React.Dispatch<React.SetStateAction<string>>,
    intervalCallbackRef: React.MutableRefObject<NodeJS.Timeout | undefined>
) => {
    const initialTitleString = title;

    const animationCallback = () => {
        const indicesToChange = Array.from({ length: title.length }, (_, _i) => {
            return Math.random() < 0.3 ? true : false;
        });

        let newTitle = "";
        for (let i = 0; i < title.length; i++) {
            if (indicesToChange[i] && title[i] !== " ") {
                newTitle += Math.random() > 0.5 ? "1" : "0";
            } else {
                newTitle += initialTitleString[i];
            }
        }

        setTitleCallback(newTitle);
    };
    intervalCallbackRef.current = setInterval(() => animationCallback(), 200);
};
