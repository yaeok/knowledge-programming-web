import { OperationsType } from '@/data/operations'

export type QuestionDetail = {
  question: string
  code: string
  answer: string
}

export type QuestionCategory = {
  id: string
  title: string
  category: OperationsType
  questions: QuestionDetail[]
}
