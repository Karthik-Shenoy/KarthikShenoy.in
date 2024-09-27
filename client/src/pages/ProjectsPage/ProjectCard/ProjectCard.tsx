import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shadcn-ui/components/ui/card";
import * as React from "react";
import { BadgeWrapper } from "../../../SharedComponents/Badges/Badge";
import { FlexDiv, FlexItem } from "../../../SharedComponents/FlexBox";
import { Title } from "../../../AppComponents/Typography";
import { Button } from "@shadcn-ui/components/ui/button";
import { GridDiv } from "../../../SharedComponents/Grid/GridDiv";
import { Image } from "../../../SharedComponents/Image/Image";
import { GradientBorderWrapper } from "../../../SharedComponents/GradientWrapper/GradientWrapper";

export type ProjectCardProps = {
    title: string;
    description: string;
    imgUrl: string;
    techStack: string[];
    docLink: string;
    demoLink: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    techStack,
    imgUrl,
    demoLink,
}) => {
    const navigateToDemo = (currDemoLink: string) => {
        window.location.replace(currDemoLink);
    };

    return (
        <GradientBorderWrapper className="w-fit h-fit">
            <Card className="flex flex-col items-start justify-center rounded-sm max-w-[400px] max-h-[600px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center w-full gap-y-4">
                    <FlexItem>
                        <Image src={imgUrl} alt={"project image"} width={150} height={150} />
                    </FlexItem>
                    <FlexItem className="self-start">
                        <p className="text-xs">{description}</p>
                    </FlexItem>
                </CardContent>
                <CardFooter className="w-full">
                    <FlexDiv horizontal={false} className="w-full gap-y-2">
                        <FlexItem className="justify-self-start">
                            <Title text={"Tech Stack"} className="desktop:text-lg text-md" />
                        </FlexItem>
                        <GridDiv className={"desktop:grid-cols-3 grid-cols-2 gap-2"}>
                            {techStack.map((tech) => (
                                <BadgeWrapper key={tech}>{tech}</BadgeWrapper>
                            ))}
                        </GridDiv>
                        <FlexDiv horizontal={true} className="gap-x-2 mt-2 self-end">
                            <Button
                                variant={"default"}
                                size={"sm"}
                                className="text-sm px-2 h-7"
                                onClick={() => {
                                    navigateToDemo(demoLink);
                                }}
                            >
                                View demo
                            </Button>
                            <Button variant={"default"} size={"sm"} className="text-sm px-2 h-7">
                                View docs
                            </Button>
                        </FlexDiv>
                    </FlexDiv>
                </CardFooter>
            </Card>
        </GradientBorderWrapper>
    );
};
