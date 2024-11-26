import { LabelProps } from '@/components/HomePage/props/label'
import { getOperationTitle, toOperationsType } from '@/data/operations'

const Label: React.FC<LabelProps> = (props: LabelProps) => {
  const operationsCategory = toOperationsType(props.operationsCategory)
  if (!operationsCategory) {
    return null
  }
  return (
    <h2 className='text-xl font-bold p-1 m-4 border-b-2 border-indigo-800'>
      {getOperationTitle(operationsCategory)}
    </h2>
  )
}

export default Label
