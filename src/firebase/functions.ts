import { getFunctions, httpsCallable } from 'firebase/functions'
import { app } from './init'
const functions = getFunctions(app, 'us-central1')

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
