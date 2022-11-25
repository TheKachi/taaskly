import { ref as fireRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from './init'
import { useAlert } from '@/composables/core/useNotification'

export const uploadBlob = (
    folderName: string,
    file: Blob
) => {
    const storageRef = fireRef(storage, folderName)
    const percentage = ref(0)
    const downloadURL = ref('')
    const create = async () => {
          const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed', (snapshot) => {
             percentage.value = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        }, (error) => {
            useAlert().openAlert({ type: 'ERROR', msg: error.message })
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
               downloadURL.value = URL
            })
        })
    }

    return { percentage, create, downloadURL }
}
