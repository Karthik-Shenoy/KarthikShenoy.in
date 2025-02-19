import React from "react"
import { FlexDiv } from "../../SharedComponents/FlexBox"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { StatusTile, StatusTileType } from "../../AppComponents/StatusTile"
import Markdown from "react-markdown"
import { componentMappings } from "./MarkdownComponentMappings"

export const ViewPostPage: React.FC<{}> = () => {
    const urlParams = useParams<{ postDir: string }>()
    const {
        isPending: isPending,
        error: error,
        isFetching: _isFetching,
        data: postMarkdown,
    } = useQuery({
        queryKey: ["post", urlParams.postDir],
        queryFn: async () => {
            const response = await fetch(`/PostsMarkdown/${urlParams.postDir}/Readme.md`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            let postMarkdown = await response.text();
            return postMarkdown;
        },
    });

    return (
        <FlexDiv className="justify-start items-center pt-2">
            {
                error ? <StatusTile type={StatusTileType.ERROR} /> :
                    isPending ? <StatusTile type={StatusTileType.LOADING} /> :
                        <div>
                            <Markdown components={componentMappings} className={"font-sans desktop:px-[196px] px-8"}>
                                {postMarkdown}
                            </Markdown>
                        </div>
            }
        </FlexDiv>
    )
}