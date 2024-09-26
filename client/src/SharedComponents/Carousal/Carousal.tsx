import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@shadcn-ui/components/ui/carousel";
import { cn } from "@shadcn-ui/lib/utils";

export type CarousalProps = {
    carousalItems?: React.ReactNode[];
    containerStyles?: string;
    carousalItemsStyles?: string;
};

export const Carousal: React.FC<CarousalProps> = ({ containerStyles, carousalItems }) => {
    return (
        <Carousel className={cn("w-full max-w-[60vw]", containerStyles)}>
            <CarouselContent>
                {carousalItems?.map((carousalItem, index) => (
                    <CarouselItem key={index} className="desktop:basis-1/2">
                        {carousalItem}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
