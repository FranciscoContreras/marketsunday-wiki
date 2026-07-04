// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://marketsunday.com',
	integrations: [
		starlight({
			title: 'Sunday Market',
			description:
				'Guides and almanacs for the Sunday Market — put your copper golems to work.',
			logo: { src: './src/assets/golem.png', alt: 'A copper golem holding a work order' },
			favicon: '/favicon.png',
			social: [
				{
					icon: 'seti:favicon',
					label: 'Work Orders on Modrinth',
					href: 'https://modrinth.com/plugin/work-orders-golems',
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/FranciscoContreras/marketsunday-wiki',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/FranciscoContreras/marketsunday-wiki/edit/main/',
			},
			lastUpdated: true,
			customCss: [
				'@fontsource-variable/fraunces',
				'@fontsource-variable/karla',
				'./src/styles/theme.css',
			],
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#c8773c' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://marketsunday.com/og.png' } },
			],
			sidebar: [
				{
					label: 'Work Orders',
					items: [
						{ label: 'Overview', slug: 'work-orders' },
						{ label: 'Getting Started', slug: 'work-orders/getting-started' },
						{ label: 'Crafting Recipes', slug: 'work-orders/recipes' },
						{
							label: 'The Six Jobs',
							items: [
								{ label: 'Courier', slug: 'work-orders/jobs/courier' },
								{ label: 'Stoker', slug: 'work-orders/jobs/stoker' },
								{ label: 'Restocker', slug: 'work-orders/jobs/restocker' },
								{ label: 'Janitor', slug: 'work-orders/jobs/janitor' },
								{ label: 'Sorter', slug: 'work-orders/jobs/sorter' },
								{ label: 'Farmhand', slug: 'work-orders/jobs/farmhand' },
							],
						},
						{ label: 'Routes & Filters', slug: 'work-orders/routes-and-filters' },
						{ label: 'Golem Care', slug: 'work-orders/golem-care' },
						{ label: 'FAQ & Troubleshooting', slug: 'work-orders/faq' },
						{ label: 'For Server Owners', slug: 'work-orders/server-owners' },
					],
				},
			],
		}),
	],
});
