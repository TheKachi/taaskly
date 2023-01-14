import { ref } from 'vue'
import { useModal } from './modal'
import Logout from '@/components/modals/logout.vue'
import DefaultVerification from '@/components/modals/verification/default.vue'
import MobileSidebar from '@/components/sidebars/main/MobileSidebar.vue'
import CreateTask from '@/components/modals/tasks/Create.vue'
import DeleteTask from '@/components/modals/tasks/Delete.vue'
import FlagTask from '@/components/modals/tasks/Flag.vue'
import SocialShare from '@/components/modals/core/SocialShare.vue'
import ShopMobileSidebar from '@/components/sidebars/shop/MobileSidebar.vue'
import Referral from '@/components/modals/core/Referral.vue'

type AuthTypes = 'Logout' | 'DefaultVerification'
type SidebarTypes = 'MobileSidebar' | 'ShopMobileSidebar'
type TaskTypes = 'CreateTask' | 'DeleteTask' | 'FlagTask'
type CoreTypes = 'SocialShare' | 'Referral'

const AuthModals = { Logout, DefaultVerification } as Record<AuthTypes, any>
const SidebarModals = { MobileSidebar, ShopMobileSidebar } as Record<SidebarTypes, any>
const TaskModals = { CreateTask, DeleteTask, FlagTask } as Record<TaskTypes, any>
const CoreModals = { SocialShare, Referral } as Record<CoreTypes, any>

export const modal = useModal(ref([] as any))
const authModal = modal.register('Auth', AuthModals)
const sidebarModal = modal.register('Sidebar', SidebarModals)
const taskModal = modal.register('Task', TaskModals)
const coreModal = modal.register('Core', CoreModals)

export const useAuthModal = () => authModal
export const useSidebarModal = () => sidebarModal
export const useTaskModal = () => taskModal
export const useCoreModal = () => coreModal
