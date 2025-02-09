import * as React from "react"
import { FlexDiv } from "../../SharedComponents/FlexBox"
import { Image } from "../../SharedComponents/Image/Image"
import { Title } from "../Typography"

export enum StatusTileType {
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
    SUCCESS = "success",
    NODATA = "nodata",
    LOADING = "loading"
}

export type StatusTileProps = {
    type: StatusTileType;
}

export const StatusTile: React.FC<StatusTileProps> = ({ type }) => {

    const tile = React.useMemo(() => {
        switch (type) {
            case StatusTileType.ERROR:
                return (
                    <TileWrapper>
                        <Image src="./SharedIcons/warning.png" alt="error" width={256} height={256} />
                        <Title text="Oops! Something went wrong" className="text-3xl" />
                    </TileWrapper>
                )
            case StatusTileType.NODATA:
                return (
                    <TileWrapper>
                        <Image src="./SharedIcons/sorry.png" alt="nodata" width={256} height={256} />
                        <Title text="Sorry! No data found" className="text-3xl" />
                    </TileWrapper>
                )
            case StatusTileType.LOADING:
                return (
                    <TileWrapper>
                        <Image src="./SharedIcons/sand-clock.png" className="animate-spin duration-1000" alt="loading" width={192} height={192} />
                        <Title text="Loading..." className="text-3xl" />
                    </TileWrapper>
                )

        }
    }, [type]);
    return (
        tile
    )
}

const TileWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <FlexDiv className="w-full h-full items-center justify-center gap-y-4">
            {children}
        </FlexDiv>
    )
}