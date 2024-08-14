import React from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shadcn-ui/components/ui/card";
import { FlexDiv } from "../../../SharedComponents/FlexIBox/FlexDiv";
import { FlexItem } from "../../../SharedComponents/FlexIBox/FlexItem";
import { useTheme } from "../../../Contexts/ThemeProvider";
import { BadgeWrapper } from "../../../SharedComponents/Badges/Badge";
import { Image } from "../../../SharedComponents/Image/Image";

const StringsManager = {
    HeroMainSectionTitle: "Bits About Me",
};

const HeroMainSection: React.FC = () => {
    const [title, setTitle] = React.useState<string>(StringsManager.HeroMainSectionTitle);
    const intervalCallbackRef = React.useRef<NodeJS.Timeout>();

    const { theme } = useTheme();

    const titleMouseEnterHandler = React.useCallback(() => {
        randomBinaryFillerAnimation(title, setTitle, intervalCallbackRef);
    }, [title, setTitle]);

    const titleMouseLeaveHandler = React.useCallback(() => {
        if (intervalCallbackRef.current) {
            clearInterval(intervalCallbackRef.current);
        }
        setTitle(StringsManager.HeroMainSectionTitle);
    }, [setTitle]);

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
            <FlexItem className="desktop:w-7/12">
                <Card className="shadow-lg desktop:px-5">
                    <CardHeader>
                        <CardTitle
                            className="desktop:text-2xl text-lg w-fit hover:text-primary border-b-primary border-b-4 hover:translate-x-[20px] duration-300"
                            onMouseEnter={titleMouseEnterHandler}
                            onMouseLeave={titleMouseLeaveHandler}
                        >
                            {title}
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
                                I believe in keeping systems simple, clean, and adaptable, ensuring
                                they remain flexible, maintainable, and focused on like performance,
                                reliability, scalability, and security
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <FlexDiv className="desktop:gap-x-4 gap-y-4 desktop:flex-row flex-col">
                            <CardTitle
                                className="desktop:text-xl text-md w-fit hover:text-primary border-b-primary border-b-4  duration-300"
                                onMouseEnter={titleMouseEnterHandler}
                                onMouseLeave={titleMouseLeaveHandler}
                            >
                                My Interests
                            </CardTitle>
                            <FlexDiv horizontal={true} className="gap-x-2 ">
                                <BadgeWrapper>C++</BadgeWrapper>
                                <BadgeWrapper>TypeScript</BadgeWrapper>
                                <BadgeWrapper>Go</BadgeWrapper>
                                <BadgeWrapper>Rust</BadgeWrapper>
                                <BadgeWrapper>Distributed Systems</BadgeWrapper>
                            </FlexDiv>
                        </FlexDiv>
                    </CardFooter>
                </Card>
            </FlexItem>
            <FlexItem>
                <Image
                    src="./HeroSectionImage.png"
                    alt="Karthik's photo"
                    width={300}
                    height={270}
                    className={`rounded-3xl shadow-xl border-[1px] border-accent ${
                        theme == "light" && "border-gray-400"
                    }`}
                />
            </FlexItem>
        </FlexDiv>
    );
};

export default HeroMainSection;

/**
 * Lunches
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
