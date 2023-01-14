import { ref } from 'vue'
import { useModal } from './modal'
import Logout from '@/components/modals/logout.vue'
import DefaultVerification from '@/components/modals/verification/default.vue'
import MobileSidebar from '@/components/sidebars/main/MobileSidebar.vue'
import CreateTask from '@/components/modals/tasks/Create.vue'
import DeleteTask from '@/components/modals/tasks/Delete.vue'
import FlagTask from '@/components/modals/tasks/Flag.vue'
import SocialShare from '@/components/modals/core/SocialShare.vue'
import Referral from '@/components/modals/core/Referral.vue'
import CreateService from '@/components/modals/services/profile/CreateService.vue'

type AuthTypes = 'Logout' | 'DefaultVerification'
type SidebarTypes = 'MobileSidebar'
type TaskTypes = 'CreateTask' | 'DeleteTask' | 'FlagTask'
type CoreTypes = 'SocialShare' | 'Referral'
type ServiceProfileTypes = 'CreateService'

const AuthModals = { Logout, DefaultVerification } as Record<AuthTypes, any>
const SidebarModals = { MobileSidebar } as Record<SidebarTypes, any>
const TaskModals = { CreateTask, DeleteTask, FlagTask } as Record<TaskTypes, any>
const CoreModals = { SocialShare, Referral } as Record<CoreTypes, any>
const ServiceProfileModals = { CreateService } as Record<ServiceProfileTypes, any>

export const modal = useModal(ref([] as any))
const authModal = modal.register('Auth', AuthModals)
const sidebarModal = modal.register('Sidebar', SidebarModals)
const taskModal = modal.register('Task', TaskModals)
const coreModal = modal.register('Core', CoreModals)
const serviceProfileModal = modal.register('ServiceProfile', ServiceProfileModals)

export const useAuthModal = () => authModal
export const useSidebarModal = () => sidebarModal
export const useTaskModal = () => taskModal
export const useCoreModal = () => coreModal
export const useServiceProfileModal = () => serviceProfileModal
