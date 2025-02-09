import { FlexDiv } from "../../SharedComponents/FlexBox"
import { Image } from "../../SharedComponents/Image/Image"

export const componentMappings: {
    [key: string]: React.FC<React.PropsWithChildren<any>>
} =
{
    h1: ({ children }) => <h1 className="text-4xl font-extrabold my-5">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-4">{children}</h2>,
    h3: ({ children }) => <h1 className="text-2xl font-semibold my-3">{children}</h1>,
    p: ({ children }) => <p className="text-md my-2">{children}</p>,
    ul: ({ children }) => <ul className="text-md list-disc list-inside ml-8">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside ml-4">{children}</ol>,
    li: ({ children }) => <li className="my-2">{children}</li>,
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            {children}
        </blockquote>
    ),
    code: ({ children }) => (
        <code className="bg-gray-700 text-red-500 px-[3px] py-[2px] rounded-sm">{children}</code>
    ),
    pre: ({ children }) => (
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">{children}</pre>
    ),
    a: ({ children, href }) => (
        <a href={href} className="text-blue-500 underline hover:text-blue-700">
            {children}
        </a>
    ),
    img: ({ src, alt: altStr }) => {
        const [alt, dims] = altStr.split("|")
        const [width, height] = dims.split("x").map((dim: string) => parseInt(dim, 10))
        return (
            <FlexDiv className="justify-center items-center py-6">
                <Image src={src} alt={alt} width={width} height={height} />
            </FlexDiv>
        )
    }
}