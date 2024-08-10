import { getDoc, Timestamp } from 'firebase/firestore'
import type { IInterview, IStage } from '@/entities/interview/model'

export const getData = async (docref: any, interview: any, isLoading: any): Promise<void> => {
  isLoading.value = true
  const docSnap = await getDoc(docref)
  const data = docSnap.data() as IInterview
  if (docSnap) {
    if (data.stages && data.stages.length) {
      data.stages = data.stages.map((stage: IStage) => {
        if (stage.date && stage.date instanceof Timestamp) {
          return { ...stage, date: stage.date.toDate() }
        }
        return stage
      })
    }
  }
  interview.value = data
  isLoading.value = false
  console.log(interview.value)
}
