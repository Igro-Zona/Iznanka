// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";

import icon from "astro-icon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
	site: "https://whirltasks.netlify.app",
	base: "/",
	integrations: [
		sitemap(),
		icon({
			iconDir: "src/assets/svg",
			svgoOptions: {
				multipass: true,
				plugins: [
					{ name: "cleanupAttrs" },
					{ name: "removeDoctype" },
					{ name: "removeXMLProcInst" },
					{ name: "removeComments" },
					{ name: "removeMetadata" },
					{ name: "removeEditorsNSData" },
					{ name: "convertColors" },
					{ name: "removeUnknownsAndDefaults" },
					{ name: "removeNonInheritableGroupAttrs" },
					{ name: "removeUselessStrokeAndFill" },
					{ name: "removeViewBox" },
					{ name: "cleanupEnableBackground" },
					{ name: "removeHiddenElems" },
					{ name: "removeEmptyText" },
					{ name: "convertShapeToPath" },
					{ name: "convertEllipseToCircle" },
					{ name: "moveElemsAttrsToGroup" },
					{ name: "moveGroupAttrsToElems" },
					{ name: "collapseGroups" },
					{ name: "convertPathData" },
					{ name: "convertTransform" },
					{ name: "removeEmptyAttrs" },
					{ name: "removeEmptyContainers" },
					{ name: "mergePaths" },
					{ name: "removeUnusedNS" },
					{ name: "sortAttrs" },
					{ name: "removeTitle" },
					{ name: "removeDesc" },
					{ name: "cleanupNumericValues" },
				],
			},
		}),
	],
	vite: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@assets": path.resolve(__dirname, "src/assets"),
				"@fonts": path.resolve(__dirname, "src/assets/fonts"),
				"@images": path.resolve(__dirname, "src/assets/images"),
				"@svg": path.resolve(__dirname, "src/assets/svg"),
				"@blocs": path.resolve(__dirname, "src/blocs"),
				"@components": path.resolve(__dirname, "src/blocs/components"),
				"@elements": path.resolve(__dirname, "src/blocs/elements"),
				"@layouts": path.resolve(__dirname, "src/blocs/layouts"),
				"@scripts": path.resolve(__dirname, "src/scripts"),
				"@styles": path.resolve(__dirname, "src/styles"),
			},
		},
	},
});
