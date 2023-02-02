import dashboard from '~~/src/assets/icons/src/dashboard.vue'
import service from '~~/src/assets/icons/src/service.vue'
import shop from '~~/src/assets/icons/src/shop.vue'
import wallet from '~~/src/assets/icons/src/wallet.vue'
import profile from '~~/src/assets/icons/src/profile.vue'
import help from '~~/src/assets/icons/src/help.vue'
import order from '~~/src/assets/icons/src/order.vue'

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
		route: '/main/marketplace'
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
		name: 'Support',
		route: '/main/support'
	}

]

export const shopRoutes = [
	{
		icon: dashboard,
		name: 'Overview',
		route: '/shop'
	},
	{
		icon: order,
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
		route: '/service'
	},
	{
		icon: dashboard,
		name: 'Schedules',
		route: '/service/schedules'
	},
	{
		icon: dashboard,
		name: 'Customers',
		route: '/service/customers'
	},
	{
		icon: dashboard,
		name: 'Services',
		route: '/service/services'
	},
	{
		icon: dashboard,
		name: 'Website',
		route: '/service/website'
	}
]

export const mainTopbarName = {
	'main-tasks-id': {
		name: 'Tasks',
		can_go_back: true,
		back_routes: '/main/home'
	},
	'main-tasks-u-id': {
		name: 'My Tasks',
		can_go_back: true,
		back_routes: '/main/home'
	},
	'main-home': {
		name: 'Home',
		can_go_back: false
	},
	'main-services': {
		name: 'Services',
		can_go_back: false
	},
	'main-marketplace': {
		name: 'MarketPlace',
		can_go_back: false
	},
	'main-wallet': {
		name: 'Wallet',
		can_go_back: false
	},
	'main-account': {
		name: 'Account',
		can_go_back: false
	},
	'main-support': {
		name: 'Support',
		can_go_back: false
	},
	'main-referrals': {
		name: 'Refferals',
		can_go_back: true,
		back_routes: '/main/home'
	}
}

export const topbarName = (name: string) => {
	if (name in mainTopbarName) return mainTopbarName[name]
	return { name }
}
