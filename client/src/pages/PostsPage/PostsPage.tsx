import * as React from "react";
import { AppContextConsumer, useAppContext } from "../../Contexts";
import * as SharedConstants from "../SharedConstants";
import { FlexDiv } from "../../SharedComponents/FlexBox/FlexDiv";
import { FlexItem } from "../../SharedComponents/FlexBox/FlexItem";
import { PostsCard, PostsCardProps } from "./PostsCard/PostsCard";
import { GridDiv } from "../../SharedComponents/Grid/GridDiv";
import { useQuery } from "@tanstack/react-query";
import { StatusTile, StatusTileType } from "../../AppComponents/StatusTile";

export const PostsPage: React.FC = () => {

    const appContextData = useAppContext();

    const {
        isPending: isPending,
        error: error,
        isFetching: _isFetching,
        data: posts,
    } = useQuery({
        queryKey: [appContextData.appState.selectedPostsPage],
        queryFn: async () => {
            const response = await fetch(`/api-root/posts/${appContextData.appState.selectedPostsPage}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            let projects = await response.json();
            return projects as PostsCardProps[];
        },
    });
    const postsSkeleton = React.useMemo(() => (
        <GridDiv>
            {Array.from({ length: 4 }).map(
                (_, index) => (<PostsCard key={index} isSkeleton={true} />)
            )}
        </GridDiv>
    ), []);
    const renderedPostsList = React.useMemo(() => {
        if (posts?.length == 0) return <StatusTile type={StatusTileType.NODATA} />;
        return (
            <GridDiv>
                {posts?.map((post) => <PostsCard {...post} />)}
            </GridDiv>
        );
    }, [posts]);
    return (
        <AppContextConsumer>
            {({ appState }) => {
                return (
                    <FlexDiv className={"justify-start p-2"}>
                        <FlexItem>
                            <h1 className="scroll-m-20 mb-8  font-extrabold tracking-tight w-[60vw] desktop:text-4xl text-3xl">
                                {
                                    SharedConstants.postPageHeadings[
                                    appState.selectedPostsPage as SharedConstants.PostPageKey
                                    ]
                                }
                            </h1>
                        </FlexItem>
                        {error ?
                            <FlexItem>
                                <StatusTile type={StatusTileType.ERROR} />
                            </FlexItem>
                            : (isPending || !posts) ? postsSkeleton : renderedPostsList
                        }
                    </FlexDiv>
                );
            }}
        </AppContextConsumer >
    );
};
