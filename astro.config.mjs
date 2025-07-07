import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-frontend-masters.netlify.app/',
	output: 'static',
	integrations: [
		solid({
			include: ['**/solid/*'],
		}),
		react({
			include: ['**/react/*'],
		}),
	],
});
