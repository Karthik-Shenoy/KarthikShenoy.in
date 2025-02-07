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
import { Skeleton } from "@shadcn-ui/components/ui/skeleton";
import { FlexDiv } from "../../../SharedComponents/FlexBox";

export type PostsCardProps = {
    title: string;
    description: string;
    tags: string[];
    date: string;
    isSkeleton: false;
    onClick?: () => void;
} | {
    isSkeleton: true;
};

export const PostsCard: React.FC<PostsCardProps> = (props) => {

    if (props.isSkeleton) {
        return (
            <PostCardWrapper>
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="w-[95%] min-h-8" />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className="w-[25%] min-h-4" />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FlexDiv className="gap-y-3">
                        <Skeleton className="w-[95%] min-h-6" />
                        <Skeleton className="w-[75%] min-h-4" />
                        <Skeleton className="w-[85%] min-h-4" />
                        <Skeleton className="w-[95%] min-h-6" />
                    </FlexDiv>
                </CardContent>
                <CardFooter>
                    <GridDiv className="tab:grid-cols-3 grid-cols-2 gap-2">
                        <Skeleton className="w-[96px] min-h-3"></Skeleton>
                        <Skeleton className="w-[96px] min-h-3"></Skeleton>
                        <Skeleton className="w-[96px] min-h-3"></Skeleton>
                    </GridDiv>
                </CardFooter>
            </PostCardWrapper>
        )
    }

    const { title, description, tags, date, onClick } = props;

    return (
        <PostCardWrapper onClick={onClick}>
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
        </PostCardWrapper>
    );
};


const PostCardWrapper: React.FC<React.PropsWithChildren<{ onClick?: () => void }>> = ({ children, onClick }) => {
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
            {children}
        </Card>
    )
}
