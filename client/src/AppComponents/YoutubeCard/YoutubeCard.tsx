import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shadcn-ui/components/ui/card";
import { BadgeWrapper } from "../../SharedComponents/Badges/Badge";
import { GridDiv } from "../../SharedComponents/Grid/GridDiv";
import { cn } from "@shadcn-ui/lib/utils";
import { FlexDiv } from "../../SharedComponents/FlexBox/FlexDiv";
import { Image } from "../../SharedComponents/Image/Image";

export type YoutubeCardProps = {
    title: string;
    url: string;
    tags: string[];
    date: string;
    className?: string;
};

export const YoutubeCard: React.FC<YoutubeCardProps> = ({ title, url, tags, date, className }) => {
    return (
        <Card className={cn("p-1 w-[600px]h-[400px] items-center justify-center flex flex-col", className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardContent>
                <FlexDiv className="justify-center items-center">
                    <Image src={url} alt={"YouTube thumbnail"} height={100} width={100} className={"w-[90%] shadow-md rounded-xl"}/>
                </FlexDiv>
            </CardContent>
            <CardFooter>
                <GridDiv className="desktop:grid-cols-3 grid-cols-2 gap-2">
                    {tags.map((tag) => (
                        <BadgeWrapper key={tag}>{tag}</BadgeWrapper>
                    ))}
                </GridDiv>
            </CardFooter>
        </Card>
    );
};
