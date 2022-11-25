import { ref, uploadBytes } from 'firebase/storage'
import { storage } from './init'

export const uploadBlob = async (
    folderName: string,
    file: Blob
) => {
    const storageRef = ref(storage, folderName)
    uploadBytes(storageRef, file).then((snapshot) => {
     console.log(snapshot)
  console.log('Uploaded a blob or file!')
})
}
