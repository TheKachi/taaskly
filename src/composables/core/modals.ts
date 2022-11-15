import { ref } from 'vue'
import { useModal } from './modal'
import Logout from '@/components/modals/logout.vue'

type AuthTypes = 'Logout'

const AuthModals = { Logout } as Record<AuthTypes, any>

export const modal = useModal(ref([] as any))
const authModal = modal.register('Auth', AuthModals)

export const useAuthModal = () => authModal
