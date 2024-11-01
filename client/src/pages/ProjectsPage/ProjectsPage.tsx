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
            // let projects = await response.json();
            let projects = [
                {
                    title: "Word Roulette",
                    description:
                        "Word Roulette is a round-based multiplayer game, similar to roulette, using WebSockets for interactive gameplay, built with JavaScript and Go.",
                    imgUrl: "./ProjectIcons/WordRoulette.png",
                    techStack: ["React", "TypeScript", "TailwindCSS", "Go"],
                    id: 1,
                    docLink: "",
                    demoLink: "https://karthik.shenoyk.com/demo/word-roulette",
                },
                {
                    title: "CustomDB",
                    description:
                        "The project enables spawning a database with either LSM trees or SSTables as the storage engine. It features a middle layer written in Go that communicates with clients via HTTP and the database via UDP. The complete logic, from the query engine to the storage engine, is implemented in C++",
                    imgUrl: "./ProjectIcons/CustomDB.png",
                    techStack: ["React", "TypeScript", "C++", "GO"],
                    id: 2,
                    docLink: "",
                    demoLink: "https://karthik.shenoyk.com/demo/db-profiler",
                },
            ];
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
