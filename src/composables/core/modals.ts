import { ref } from 'vue'
import { useModal } from './modal'
import logout from '@/components/modals/logout.vue'

type AuthTypes = 'logout'

const AuthModals = { logout } as Record<AuthTypes, any>

export const modal = useModal(ref([] as any))
const authModal = modal.register('Ticket', AuthModals)

export const useAuthModal = () => authModal
