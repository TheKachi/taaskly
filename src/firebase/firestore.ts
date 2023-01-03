import { v4 as uuidv4 } from 'uuid'
import { Ref } from 'vue'
import {
	doc,
	onSnapshot,
	setDoc,
	updateDoc,
	deleteDoc,
	getDoc,
	limit,
	collection,
	getDocs,
	query,
	where
} from 'firebase/firestore'
import { db } from './init'
import { useUser } from '@/composables/auth/user'

const { id } = useUser()
const FETCHLIMIT = 20

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

export const getFirestoreCollection = async (
	collectionName: string,
	ArrayRef: Ref<Array<any>>
) => {
	const collectionRef = collection(db, collectionName)
	const q = query(collectionRef, limit(FETCHLIMIT))

	const unsubscribe = onSnapshot(q, (snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === 'added') {
				ArrayRef.value.push(change.doc.data())
			}
			if (change.type === 'modified') {
				ArrayRef.value.push(change.doc.data())
			}
			if (change.type === 'removed') {
				const changedArray = ArrayRef.value.filter(
					(item) => item.id !== change.doc.data().id
				)
				ArrayRef.value = changedArray
			}
		})
	})
}

// export const getFirestoreUserCollection = async (collectionName: string, ArrayRef:Ref<any>) => {
// 	const collectionRef = collection(db, collectionName)
// 	const q = query(
// 		collectionRef,
// 		limit(FETCHLIMIT),
// 		where('userId', '==', id.value)
// 	)
// 	const result: any = []

// 	const unsubscribe = onSnapshot(q, (querySnapshot) => {
// 		querySnapshot.forEach((doc) => {
// 			result.push(doc.data())
// 		})
// 		console.log(result)
// 		ArrayRef.value = result
// 	})
// }

export const deleteFirestoreDocument = async (
	collection: string,
	id: string
) => {
	await deleteDoc(doc(db, collection, id))
}
