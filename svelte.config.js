import preprocess from "svelte-preprocess";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte"
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	],

	plugins: [
		viteCommonjs()
	]
};

export default config;
