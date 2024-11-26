import { arrayOperations } from '@/data/Array/array_operations'
import { arrayQuestions } from '@/data/Array/array_questions'
import { dateOperations } from '@/data/Date/date_operations'
import { dateQuestions } from '@/data/Date/date_questions'
import { stringOperations } from '@/data/String/string_operations'
import { stringQuestions } from '@/data/String/string_questions'
import { OperationCategory } from '@/domain/entity/operation'
import { QuestionCategory } from '@/domain/entity/question'

export const Operations = {
  ARRAY: 'array_operations',
  STRING: 'string_operations',
  DATE: 'date_operations',
  NUMBER: 'number_operations',
  OBJECT: 'object_operations',
  OTHER: 'other_operations',
} as const

export type OperationsType = (typeof Operations)[keyof typeof Operations]

// オペレーションに対応する日本語のタイトルを定義
export const OperationsTitle = {
  [Operations.ARRAY]: '配列操作',
  [Operations.STRING]: '文字列操作',
  [Operations.DATE]: '日付操作',
  [Operations.NUMBER]: '数値操作',
  [Operations.OBJECT]: 'オブジェクト操作',
  [Operations.OTHER]: 'その他',
} as const

// OperationsType の値から対応する日本語タイトルを取得する関数
export function getOperationTitle(operation: OperationsType): string {
  return OperationsTitle[operation]
}

// 与えられた文字列がOperationsTypeに一致するかどうかを確認し、適切な型で返す関数
export function toOperationsType(value: string): OperationsType | undefined {
  const values: OperationsType[] = Object.values(Operations)
  if (values.includes(value as OperationsType)) {
    return value as OperationsType
  }
  return undefined
}

// OperationsType の値から対応するオブジェクトを取得する関数
export function getOperations(operation: OperationsType): OperationCategory[] {
  console.log(operation)
  switch (operation) {
    case Operations.ARRAY:
      return arrayOperations
    case Operations.STRING:
      return stringOperations
    case Operations.DATE:
      return dateOperations
    case Operations.NUMBER:
      return []
    case Operations.OBJECT:
      return []
    case Operations.OTHER:
      return []
  }
}
// OperationsType の値から対応する問題を取得する関数
export function getQuestions(operation: OperationsType): QuestionCategory[] {
  switch (operation) {
    case Operations.ARRAY:
      return arrayQuestions
    case Operations.STRING:
      return stringQuestions
    case Operations.DATE:
      return dateQuestions
    case Operations.NUMBER:
      return []
    case Operations.OBJECT:
      return []
    case Operations.OTHER:
      return []
  }
}
