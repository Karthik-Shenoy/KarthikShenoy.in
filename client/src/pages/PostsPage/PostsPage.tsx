import * as React from "react";
import { AppContextConsumer } from "../../Contexts/AppContext";
import * as SharedConstants from "../SharedConstants";
import { FlexDiv } from "../../SharedComponents/FlexIBox/FlexDiv";
import { FlexItem } from "../../SharedComponents/FlexIBox/FlexItem";
import { PostsCard } from "./PostsCard/PostsCard";
import { posts } from "./PostsCard/PostsDummyData";
import { GridDiv } from "../../SharedComponents/Grid/GridDiv";

export const PostsPage: React.FC = () => {
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
                        <GridDiv>
                            {posts.map((post) => (
                                <PostsCard {...post}></PostsCard>
                            ))}
                        </GridDiv>
                    </FlexDiv>
                );
            }}
        </AppContextConsumer>
    );
};
