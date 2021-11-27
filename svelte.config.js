import preprocess from "svelte-preprocess";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
		paths: {
			base: dev ? '' : '/YACTG',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'internal',

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
