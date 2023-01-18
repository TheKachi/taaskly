import { User } from '@firebase/auth'
import { RemovableRef, useStorage } from '@vueuse/core'
// import { FirebaseUserType } from './types'
import { Ref } from 'vue'
interface globalStateType {
    userString: RemovableRef<string | null>,
    user: User | null,
    isLoggedIn: Ref<boolean>,
    hasAProfile: Ref<boolean>,
    id: RemovableRef<string | null>,
    username: RemovableRef<string | null>,
}

const globalState:globalStateType = {
    userString: useStorage('userString', null),
    user: useStorage('userString', '').value ? JSON.parse(useStorage('userString', '').value) as User : null,
    isLoggedIn: useStorage('isLoggedIn', false),
    hasAProfile: useStorage('hasAProfile', false),
    username: useStorage('taaskly_username', ''),
    id: useStorage('id', null)
}

export const useUser = () => {
    const setUser = (user: User, username?:string) => {
        globalState.userString.value = JSON.stringify(user) as any
        globalState.user = user
        globalState.id.value = user.uid
        globalState.isLoggedIn.value = true
    }
    const setProfileStatus = (status: boolean) => {
        globalState.hasAProfile.value = status
    }
    const setProfileUsername = (name: string) => {
        globalState.username.value = name
    }

    const lightUser = () => {
        globalState.user = null
        globalState.userString.value = null
        globalState.isLoggedIn.value = false
        globalState.hasAProfile.value = false
        globalState.id.value = null
        globalState.username.value = null
    }

    return { setUser, lightUser, ...globalState, setProfileStatus, setProfileUsername }
}
