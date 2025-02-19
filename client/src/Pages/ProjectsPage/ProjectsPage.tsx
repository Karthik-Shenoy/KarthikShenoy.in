import * as React from "react";
import { FlexDiv } from "../../SharedComponents/FlexBox/FlexDiv";
import { FlexItem } from "../../SharedComponents/FlexBox/FlexItem";
import { GridDiv } from "../../SharedComponents/Grid/GridDiv";
import { Title } from "../../AppComponents/Typography";
import { ProjectCard, ProjectCardProps } from "./ProjectCard/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { SkeletonCard } from "../../AppComponents/SkeletonCard/SkeletonCard";

export const ProjectsPage: React.FC = () => {
    const {
        isPending: isPending,
        error: _error,
        isFetching: _isFetching,
        data,
    } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const response = await fetch("/api-root/projects");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            let projects = await response.json();
            return projects as ProjectCardProps[];
        },
    });

    return (
        <FlexDiv className={"justify-start p-2 gap-y-4"}>
            <FlexItem>
                <Title text={"Projects"} />
            </FlexItem>
            <GridDiv>
                {isPending ? (
                    <SkeletonCards />
                ) : (
                    data?.map((project) => <ProjectCard {...project} />)
                )}
            </GridDiv>
        </FlexDiv>
    );
};

const SkeletonCards = React.memo(() => {
    return (
        <>
            <SkeletonCard />
            <SkeletonCard />
        </>
    );
});
