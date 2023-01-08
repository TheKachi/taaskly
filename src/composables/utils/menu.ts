import dashboard from '~~/src/assets/icons/src/dashboard.vue'
import service from '~~/src/assets/icons/src/service.vue'
import shop from '~~/src/assets/icons/src/shop.vue'
import wallet from '~~/src/assets/icons/src/wallet.vue'
import profile from '~~/src/assets/icons/src/profile.vue'
import help from '~~/src/assets/icons/src/help.vue'

export const mainRoutes = [
	{
		icon: dashboard,
		name: 'Home',
		route: '/main/home'
	},
	{
		icon: service,
		name: 'Services',
		route: '/main/services'
	},
	{
		icon: shop,
		name: 'MarketPlace',
		route: '/main/shops'
	},

	{
		icon: wallet,
		name: 'Wallet',
		route: '/main/wallet'
	},
	{
		icon: profile,
		name: 'Account',
		route: '/main/account'
	},
	{
		icon: help,
		name: 'Help',
		route: '/main/help'
	}

]

export const shopRoutes = [
	{
		icon: dashboard,
		name: 'Overview',
		route: '/shop'
	}
]
export const serviceRoutes = [
	{
		icon: dashboard,
		name: 'Overview',
		route: '/shop'
	}
]
