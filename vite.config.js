import path from "path";
import glob from "glob";
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => ({
    root: path.join(__dirname, "_src"),
    publicDir: command === 'build' ? false : '_src/assets',
    build: {
        outDir: path.join(__dirname, "_dist"),
        rollupOptions: {
            input: glob.sync(path.resolve(__dirname, "_src", "*.html")),
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        },
    },

}));