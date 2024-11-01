import * as React from "react";
import { Skeleton } from "@shadcn-ui/components/ui/skeleton";

export type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

export const Image: React.FC<ImageProps> = ({ src, alt, width, height, className }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const imageDivRef = React.useRef<HTMLDivElement | null>(null);

    const onImageLoadHandler = () => {
        setIsLoading(false);
        imageDivRef.current?.appendChild(downloadAndCreateImageElement);
    };

    const downloadAndCreateImageElement = React.useMemo(() => {
        const img = document.createElement("img");
        img.src = src;
        
        if (width && height) {
            img.width = width;
            img.height = height;
        }
        img.className = className || "";
        img.alt = alt;

        img.onload = onImageLoadHandler;
        return img;
    }, [src]);

    return (
        <div ref={imageDivRef}>
            {isLoading && (
                <Skeleton
                    style={{
                        width: width,
                        height: height,
                    }}
                    className={className}
                />
            )}
        </div>
    );
};
