import { OperationsType } from '@/data/operations'

// 個々の操作関数を表す型
export type OperationDetail = {
  id: string
  name: string
  description: string
  code: string
  return?: string
}

// 操作カテゴリを表す型
export type OperationCategory = {
  id: string
  title: string
  category: OperationsType
  functions: OperationDetail[]
}
