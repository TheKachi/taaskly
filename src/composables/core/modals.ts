import { ref } from 'vue'
import { useModal } from './modal'
import Logout from '@/components/modals/logout.vue'
import DefaultVerification from '@/components/modals/verification/default.vue'
import MobileSidebar from '@/components/sidebars/MobileSidebar.vue'
import CreateTask from '@/components/modals/tasks/Create.vue'

type AuthTypes = 'Logout' | 'DefaultVerification'
type SidebarTypes = 'MobileSidebar'
type TaskTypes = 'CreateTask'

const AuthModals = { Logout, DefaultVerification } as Record<AuthTypes, any>
const SidebarModals = { MobileSidebar } as Record<SidebarTypes, any>
const TaskModals = { CreateTask } as Record<TaskTypes, any>

export const modal = useModal(ref([] as any))
const authModal = modal.register('Auth', AuthModals)
const sidebarModal = modal.register('Sidebar', SidebarModals)
const taskModal = modal.register('Task', TaskModals)

export const useAuthModal = () => authModal
export const useSidebarModal = () => sidebarModal
export const useTaskModal = () => taskModal
