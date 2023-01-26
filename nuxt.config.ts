import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'

export default {
	ssr: process.env.NODE_ENV === 'production',
	routeRules: {
		'/': { static: true },
		'/main/**': { ssr: false },
		'/shop/**': { ssr: false },
		'/service/**': { ssr: false },
		'/auth/**': { ssr: false }
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => ['lottie-player'].includes(tag)
		}
	},
	app: {
		head: {
			title: 'Taaskly - Everything you need in one place',
			htmlAttrs: { lang: 'en' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					'http-equiv': 'Content-Security-Policy',
					content: 'upgrade-insecure-requests'
				},
				{
					name: 'title',
					content: 'Taaskly - Everything you need in one place'
				},
				{
					name: 'description',
					content: 'Don\'t stress about the things you need to do, use Taaskly'
				},
				{
					name: 'twitter:title',
					content: 'Taaskly - Everything you need in one place'
				},
				{ name: 'twitter:image', content: '/favicon.svg' },
				{
					name: 'twitter:description',
					content: 'Don\'t stress about the things you need to do, use Taaskly'
				},
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:site', content: '@taaskly' },
				{ name: 'twitter:creator', content: '@taaskly' },
				{
					property: 'og:title',
					content: 'Taaskly - Everything you need in one place'
				},
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
			script: [
				{
					src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
					defer: true,
					async: true
				}
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
				{
					href: 'https://fonts.googleapis.com',
					rel: 'preconnect'
				},
				{
					href: 'https://fonts.gstatic.com',
					rel: 'preconnect',
					crossorigin: true
				},
				{
					href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap',
					rel: 'stylesheet',
					defer: true,
					async: true
				}
			]
		}
	},
	loading: {
		color: 'blue',
		height: '5px'
	},

	alias: {
		'@': './src'
	},
	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss'],

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
	plugins: ['@/plugins/currency/index.ts'],
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
