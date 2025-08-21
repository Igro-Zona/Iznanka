// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
	site: "https://iznanka.netlify.app/",
	base: "/",
	integrations: [sitemap()],
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
