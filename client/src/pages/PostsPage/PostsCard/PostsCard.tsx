import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shadcn-ui/components/ui/card";
import { BadgeWrapper } from "../../../SharedComponents/Badges/Badge";
import { GridDiv } from "../../../SharedComponents/Grid/GridDiv";
import React from "react";

export type PostsCardProps = {
    title: string;
    description: string;
    tags: string[];
    date: string;
    onClick?: () => void;
};

export const PostsCard: React.FC<PostsCardProps> = ({
    title,
    description,
    tags,
    date,
    onClick,
}) => {
    const onKeyDown = React.useCallback(
        (evt: React.KeyboardEvent) => {
            if (evt.key == "Enter") {
                onClick?.();
            }
        },
        [onClick]
    );

    return (
        <Card onClick={onClick} onKeyDown={onKeyDown} className="p-4 max-w-[540px]" tabIndex={0}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
                <GridDiv className="tab:grid-cols-3 grid-cols-2 gap-2">
                    {tags.map((tag) => (
                        <BadgeWrapper key={tag}>{tag}</BadgeWrapper>
                    ))}
                </GridDiv>
            </CardFooter>
        </Card>
    );
};
