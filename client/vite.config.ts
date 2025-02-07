import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const addScriptIdPlugin = () => {
    return {
        name: "add-script-id",
        transformIndexHtml(html: string) {
            return html.replace(
                /<script(.*?)src=(['"])(.*?index-.*?)\2(.*?)><\/script>/,
                (_, attributes, quotes, filePath, attributesRemaining) =>
                    `<script${attributes}src=${quotes}${filePath}${quotes}${attributesRemaining} id="app-script" defer></script>`
            );
        },
    };
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), addScriptIdPlugin()],
    resolve: {
        alias: {
            "@shadcn-ui": path.resolve(__dirname, "./@shadcn-ui"),
        },
    },
});
