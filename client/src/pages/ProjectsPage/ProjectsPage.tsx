import * as React from "react";
import { FlexDiv } from "../../SharedComponents/FlexBox/FlexDiv";
import { FlexItem } from "../../SharedComponents/FlexBox/FlexItem";
import { GridDiv } from "../../SharedComponents/Grid/GridDiv";
import { Title } from "../../AppComponents/Typography";
import { dummyProjects } from "./ProjectCard/dummyProjects";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const ProjectsPage: React.FC = () => {
    return (
        <FlexDiv className={"justify-start p-2 gap-y-4"}>
            <FlexItem>
                <Title text={"Projects"} />
            </FlexItem>
            <GridDiv>
                {dummyProjects.map((project) => (
                    <ProjectCard {...project} />
                ))}
            </GridDiv>
        </FlexDiv>
    );
};
