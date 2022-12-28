import { v4 as uuidv4 } from 'uuid'
import {
	doc,
	setDoc, updateDoc,
	deleteDoc,
	getDoc, limit,
	collection,
	getDocs,
  query, where
} from 'firebase/firestore'
import { db } from './init'
import { useUser } from '@/composables/auth/user'

const { id } = useUser()
export const saveFirestoreDocument = async (
  collection: string,
  id: string = uuidv4(),
	data: any
) => {
	await setDoc(doc(db, collection, id), data)
}
export const updateFirestoreDocument = async (
  collection: string,
  id: string = uuidv4(),
	data: any
) => {
	await updateDoc(doc(db, collection, id), data)
}

export const getSingleFirestoreDocument = async (
	collection: string,
	id: string
) => {
	const singleDocumentRef = doc(db, collection, id)
	const docSnap = await getDoc(singleDocumentRef)
	if (docSnap.exists()) {
		return docSnap.data() as any
	} else {
		return null
	}
}

export const getFirestoreNonUserCollection = async (collectionName: string) => {
	const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, limit(50), where('userId', '!=', id.value))
  const result:any = []
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })

  return result
}
export const getFirestoreUserCollection = async (collectionName: string) => {
	const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, limit(50), where('userId', '==', id.value))
  const result:any = []
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })

  return result
}

export const deleteFirestoreDocument = async (
	collection: string,
	id: string
) => {
	await deleteDoc(doc(db, collection, id))
}
