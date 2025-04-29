// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	en: { label: 'English', lang: 'en' },
	de: { label: 'Deutsch', lang: 'de' },
	es: { label: 'Español', lang: 'es' },
	ja: { label: '日本語', lang: 'ja' },
	fr: { label: 'Français', lang: 'fr' },
	it: { label: 'Italiano', lang: 'it' },
	id: { label: 'Bahasa Indonesia', lang: 'id' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
	'pt-br': { label: 'Português do Brasil', lang: 'pt-BR' },
	'pt-pt': { label: 'Português', lang: 'pt-PT' },
	ko: { label: '한국어', lang: 'ko' },
	tr: { label: 'Türkçe', lang: 'tr' },
	ru: { label: 'Русский', lang: 'ru' },
	hi: { label: 'हिंदी', lang: 'hi' },
	da: { label: 'Dansk', lang: 'da' },
	uk: { label: 'Українська', lang: 'uk' },
};

// https://astro.build/config
export default defineConfig({
	site: 'https://openpriceaction.github.io',
	base: '/docs/',
	image: {
		service: passthroughImageService(),
	  },
	integrations: [
		starlight({
			lastUpdated: true,
			title: 'Open Price Action',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OpenPriceAction/docs' }],
			editLink: {
				baseUrl: 'https://github.com/OpenPriceAction/docs',
			},
			defaultLocale: 'en',
			locales,
			sidebar: [
				{
					label: 'getting-started',
					translations: {
						de: 'Erste Schritte',
						es: 'Introducción',
						ja: 'はじめに',
						fr: 'Premiers pas',
						it: 'Iniziare',
						id: 'Memulai',
						'zh-CN': '从这里开始',
						'pt-BR': 'Introdução',
						'pt-PT': 'Introdução',
						ko: '시작하기',
						tr: 'Başlarken',
						ru: 'Начало работы',
						hi: 'शुरुआत करना',
						uk: 'Початок роботи',
					},
					autogenerate: { directory: 'getting-started' },
				},
			],
		}),
	],
});
