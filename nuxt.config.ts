import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'

export default {
	ssr: process.env.NODE_ENV === 'production',
	// ssr: true,
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/', '/home', '/login', '/register', '/tasks/**']
		}
	},
	app: {
		head: {
			title: 'Taaskly',
			htmlAttrs: { lang: 'en' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					'http-equiv': 'Content-Security-Policy',
					content: 'upgrade-insecure-requests'
				},
				{ name: 'title', content: 'Taaskly - Everything you need in one place' },
				{
					name: 'description',
					content: 'Don\'t stress about the things you need to do, use Taaskly'
				},
				{ name: 'twitter:title', content: 'Taaskly - Everything you need in one place' },
				{ name: 'twitter:image', content: '/favicon.svg' },
				{
					name: 'twitter:description',
					content: 'Don\'t stress about the things you need to do, use Taaskly'
				},
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:site', content: '@taaskly' },
				{ name: 'twitter:creator', content: '@taaskly' },
				{ property: 'og:title', content: 'Taaskly - Everything you need in one place' },
				{ property: 'og:type', content: 'site' },
				{ property: 'og:url', content: 'https://taaskly.xyz/' },
				{ property: 'og:image', content: '/favicon.svg' },
				{ property: 'og:site_name', content: 'Taaskly' },
				{
					property: 'og:description',
					content: 'Don\'t stress about the things you need to do, use Taaskly'
				},

				{ name: 'format-detection', content: 'telephone=no' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
				{
					href: 'https://fonts.googleapis.com',
					rel: 'preconnect'
				},
				{
					href: 'https://fonts.gstatic.com',
					rel: 'preconnect'
				},
				{
					href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap',
					rel: 'stylesheet'
				}
			]
		}
	},

	alias: {
		'@': './src'
	},
	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss'],
	// buildModules: ['floating-vue/nuxt'],

	css: ['/src/assets/css/main.css'],
	components: [
		'@/components',
		{ path: '@/components/core', extensions: ['vue'] }
	],
	tailwindcss: {
		cssPath: '@/assets/css/main.css'
	},
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		}
	},
	plugins: ['@/plugins/draggable.ts', '@/plugins/currency/index.ts'],
	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
	},
	vite: {
		plugins: [
			eslintPlugin({ useEslintrc: true, exclude: ['src/helpers/**/*'] })
		],
		server: {
			watch: {
				usePolling: true
			}
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
}
