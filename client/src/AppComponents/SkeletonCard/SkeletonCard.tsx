import { Card, CardContent, CardHeader } from "@shadcn-ui/components/ui/card";
import { Skeleton } from "@shadcn-ui/components/ui/skeleton";
import * as React from "react";
import { GradientBorderWrapper } from "../../SharedComponents/GradientWrapper/GradientWrapper";
import { FlexDiv } from "../../SharedComponents/FlexBox";
import { cn } from "@shadcn-ui/lib/utils";

export type SkeletonCardProps = {
    className?: string;
};

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ className }) => {
    return (
        <GradientBorderWrapper>
            <Card className={cn("w-[300px] h-[420px]", className)}>
                <CardHeader>
                    <Skeleton className="w-[98%] min-h-8" />
                    <Skeleton className="w-[60%] min-h-8" />
                </CardHeader>
                <CardContent>
                    <FlexDiv className="gap-y-3">
                        <Skeleton className="w-[80%] min-h-8" />
                        <Skeleton className="w-[95%] min-h-[80px]" />
                        <Skeleton className="w-[60%] min-h-8" />
                        <Skeleton className="w-[95%] min-h-8" />
                        <Skeleton className="w-[60%] min-h-4" />
                        <Skeleton className="w-[80%] min-h-8" />
                    </FlexDiv>
                </CardContent>
            </Card>
        </GradientBorderWrapper>
    );
};
