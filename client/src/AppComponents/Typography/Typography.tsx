import { cn } from "@shadcn-ui/lib/utils";
import { GradientBorderWrapper } from "../../SharedComponents/GradientWrapper/GradientWrapper";

export type TitleProps = {
    text: string;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

export const Title: React.FC<TitleProps> = ({ text, className, onMouseEnter, onMouseLeave }) => {
    return (
        <GradientBorderWrapper className="w-fit h-fit p-0 pb-[3px] rounded-none hover:p-0 hover:pb-[6px] transition-all duration-300">
            <h1 className={cn("desktop:text-3xl text-2xl w-fit bg-background pb-2", className)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {text}
            </h1>
        </GradientBorderWrapper>
    );
};
