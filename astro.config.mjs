// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nuf',
      logo: {
        src: './src/assets/logo.svg',
      },
			social: {
				github: 'https://github.com/nuflang/nuf',
			},
      editLink: {
        baseUrl: 'https://github.com/nuflang/nuf-docs/tree/main',
      },
			sidebar: [],
		}),
	],
});
