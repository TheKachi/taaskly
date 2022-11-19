import axios from 'axios'
// import { useRuntimeConfig } from '#app'
import { useAlert } from '@/composables/core/useNotification'

// const config = useRuntimeConfig()
// process.env = config

// Org Repository

const $GATEWAY_ENDPOINT = import.meta.env.VITE_GATEWAY_ENDPOINT + '/v1'

export const GATEWAY_ENDPOINT = axios.create({
	baseURL: $GATEWAY_ENDPOINT
})
export const GATEWAY_ENDPOINT_B = axios.create({
	baseURL: $GATEWAY_ENDPOINT
})

GATEWAY_ENDPOINT.interceptors.request.use(
	(request:any) => {
		if (request.url.includes('auth')) {
			return request
		} else {
			request.headers.Authorization = `Bearer ${sessionStorage.getItem('token') || token.value}`
			return request
		}
	}
)

GATEWAY_ENDPOINT.interceptors.response.use(
	(response) => {
		return response
	},
	(err) => {
		if (typeof err.response === 'undefined') {
			useAlert().openAlert({ type: 'ERROR', msg: 'kindly check your network connection' })
			return 'ERROR'
		}
		if (err.response.status === 401) {
			useAlert().openAlert({ type: 'ERROR', msg: 'Unauthorised ERROR' })
			return 'ERROR'
		} else if (err.response.status === 400) {
			useAlert().openAlert({ type: 'ERROR', msg: err.response.data.message })
			return 'ERROR'
		} else if (err.response.status === 500) {
			useAlert().openAlert({ type: 'ERROR', msg: err.response.data.message })
			return 'ERROR'
		}
	}
)
