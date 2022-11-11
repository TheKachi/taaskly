import { ref } from 'vue'
import { useModal } from './modal'
import CreateTicket from '@/components/modals/CreateTicket.vue'

type TicketTypes = 'CreateTicket'

const TicketModals = { CreateTicket } as Record<TicketTypes, any>

export const modal = useModal(ref([] as any))
// const ticketModal = modal.register('Ticket', TicketModals)

// export const useTicketModal = () => ticketModal
