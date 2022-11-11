import { User } from '@firebase/auth'
import { RemovableRef, useStorage } from '@vueuse/core'
// import { FirebaseUserType } from './types'
import { Ref } from 'vue'
interface globalStateType {
    userString: RemovableRef<string | null>,
    user: User | null,
    isLoggedIn: Ref<boolean>
    id: RemovableRef<string | null>,
}

const globalState:globalStateType = {
    userString: useStorage('userString', null),
    user: useStorage('userString', '').value ? JSON.parse(useStorage('userString', '').value) as User : null,
    isLoggedIn: useStorage('isLoggedIn', false),
    id: useStorage('id', null)
}

export const useUser = () => {
    const setUser = (user: User) => {
        globalState.userString.value = JSON.stringify(user) as any
        globalState.user = user
        globalState.id.value = user.uid
        globalState.isLoggedIn.value = true
    }

    const clearUser = () => {
        globalState.user = null
        globalState.userString.value = null
        globalState.isLoggedIn.value = false
        globalState.id.value = null
    }

    return { setUser, clearUser, ...globalState }
}
