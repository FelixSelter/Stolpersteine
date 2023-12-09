import { defineConfig, squooshImageService } from 'astro/config';
import icon from 'astro-icon';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        'fa6-solid': ['angle-left', 'angle-right'],
        ph: ['x-fill'],
      },
    }),
    compress(),
  ],
  site: 'https://felixselter.github.io',
  base: '/Stolpersteine',
  image: {
    service: squooshImageService(),
  },
});
