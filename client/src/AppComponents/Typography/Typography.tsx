import { cn } from "@shadcn-ui/lib/utils";

export type TitleProps = {
    text: string;
    className?: string;
};

export const Title: React.FC<TitleProps> = ({ text, className }) => {
    return (
        <h1
            className={cn(
                "desktop:text-3xl text-2xl w-fit hover:text-primary border-b-primary border-b-4  duration-300",
                className
            )}
        >
            {text}
        </h1>
    );
};
