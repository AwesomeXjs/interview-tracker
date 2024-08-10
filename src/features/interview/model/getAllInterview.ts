import type { IInterview } from '@/entities/interview/model'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

export const getAllInterviews = async <T extends IInterview>(
  isLoading: any,
  db: any,
  userStore: any,
  interviews: any
): Promise<void> => {
  try {
    isLoading.value = true
    const q = query(
      collection(db, `users/${userStore.userId}/interviews`),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    const listInterviews: IInterview[] = querySnapshot.docs.map((doc) => doc.data() as T)
    interviews.value = [...listInterviews]
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}
