import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter({
		runtime: 'nodejs20'  // Explicitly specify Node.js 20
	  })
	}
  };

export default config;
