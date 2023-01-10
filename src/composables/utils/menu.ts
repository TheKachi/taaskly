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
	},
	{
		icon: dashboard,
		name: 'Orders',
		route: '/shop/order'
	},
	{
		icon: dashboard,
		name: 'Customers',
		route: '/shop/customers'
	},
	{
		icon: dashboard,
		name: 'Products',
		route: '/shop/products'
	},
	{
		icon: dashboard,
		name: 'Categories',
		route: '/shop/categories'
	},
	{
		icon: dashboard,
		name: 'Website',
		route: '/shop/website'
	}
]

export const serviceRoutes = [
	{
		icon: dashboard,
		name: 'Overview',
		route: '/shop'
	}
]
