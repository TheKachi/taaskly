import { httpsCallable } from 'firebase/functions'
import { functions } from './init'

export const callFirebaseFunction = async (
    functionName: string,
    details: object
) => {
    const addMessage = httpsCallable(functions, functionName)
    addMessage(details)
        .then((result) => {
          return result
        })
}
