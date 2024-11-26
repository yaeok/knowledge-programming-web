import QuestionPageComponent from '@/components/QuestionPage/QuestionPage'
import { arrayOperationsId } from '@/data/Array/array_operations'
import { arrayQuestionIds } from '@/data/Array/array_questions'
import { Operations, OperationsType } from '@/data/operations'

export async function generateStaticParams() {
  const paths = arrayOperationsId.map((operation) => {
    const lstOperationTypes: OperationsType[] = Object.values(Operations)
    return lstOperationTypes.map((operationTypes) => {
      return arrayQuestionIds.map((question) => {
        return {
          params: {
            id: operation,
            category: operationTypes,
            qid: question,
          },
        }
      })
    })
  })
  return paths
}

export type QuestionPageProps = {
  params: {
    qid: string
    category: string
  }
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  params: props,
}: QuestionPageProps) => {
  const { qid, category } = props
  console.log(qid, category)
  return <QuestionPageComponent qid={qid} category={category} />
}

export default QuestionPage
