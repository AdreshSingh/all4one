import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkReadingTime]
    },
    integrations: [starlight({
        title: 'All4One',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Learn HTML',
                items: [
                    {
                        label: 'HTML Basic', slug: 'html/basic'
                    },
                    {
                        label: 'HTML Component', slug: 'html/component'
                    },
                    {
                        label: 'HTML Attributes', slug: 'html/attributes'
                    },
                    {
                        label: 'Presentational Tags', slug: 'html/presentational'
                    },
                    {
                        label: 'Marqueee Tag', slug: 'html/marquee'
                    },
                    {
                        label: 'HTML List', slug: 'html/list'
                    },
                ]
            },
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
    }), react(), tailwind()],
});