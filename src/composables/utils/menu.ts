import Dashboard from '../../assets/icons/src/dashboard.vue'
import service from '~~/src/assets/icons/src/service.vue'
import shop from '~~/src/assets/icons/src/shop.vue'
import wallet from '~~/src/assets/icons/src/wallet.vue'
import profile from '~~/src/assets/icons/src/profile.vue'
import help from '~~/src/assets/icons/src/help.vue'

export const routes = [
	{
		icon: 'dashboard',
		name: 'Home',
		route: '/home',
		iconComp: Dashboard
	},
	{
		icon: 'service',
		name: 'Services',
		route: '/services',
		iconComp: service
	},
	{
		icon: 'shop',
		name: 'Shops',
		route: '/shops',
		iconComp: shop
	},

	{
		icon: 'wallet',
		name: 'Wallet',
		route: '/wallet',
		iconComp: wallet
	},
	{
		icon: 'profile',
		name: 'Account',
		route: '/account',
		iconComp: profile
	},
	{
		icon: 'help',
		name: 'Help',
		route: '/help',
		iconComp: help
	}

]
