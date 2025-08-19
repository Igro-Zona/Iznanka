/** @type {import('postcss-load-config').Config} */
import preset from "postcss-preset-env";
import pxtorem from "postcss-pxtorem";
export default {
	plugins: [
		preset({
			stage: 1,
		}),
		pxtorem({
			rootValue: 16,
			propList: ["*"],
		}),
	],
};
