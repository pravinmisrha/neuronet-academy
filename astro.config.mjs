import { defineConfig } from 'astro/config';

// NeuroNet Academy — static site, deployed to GitHub Pages as a
// *project* site (repo: neuronet-academy, separate from
// pravinmisrha.github.io which is the profile README repo).
// Project sites are served under a subpath:
// https://pravinmisrha.github.io/neuronet-academy/
export default defineConfig({
  site: 'https://pravinmisrha.github.io',
  base: '/neuronet-academy',
  output: 'static',
  build: {
    format: 'directory',
  },
});
