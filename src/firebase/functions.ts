import { httpsCallable } from 'firebase/functions'
import { functions } from './init'

export const callFirebaseFunction = async (
    functionName: string,
    details: object
) => {
    const call = httpsCallable(functions, functionName)
    call(details)
        .then((result) => {
          return result
        })
}
