import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shadcn-ui/components/ui/card";
import { BadgeWrapper } from "../../../SharedComponents/Badges/Badge";

export type PostsCardProps = {
    title: string;
    description: string;
    tags: string[];
    date: string;
    onClick?: () => void;
};

export const PostsCard: React.FC<PostsCardProps> = ({ title, description, tags, date, onClick }) => {
    return (
        <Card onClick={onClick} className="p-4 max-w-[540px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
                {tags.map((tag) => (
                    <BadgeWrapper key={tag}>{tag}</BadgeWrapper>
                ))}
            </CardFooter>
        </Card>
    );
};
