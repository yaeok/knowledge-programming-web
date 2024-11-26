import KnowLedgePageComponent from '@/components/KnowLedgePage/KnowLedgePage'
import { arrayOperationsId } from '@/data/Array/array_operations'
import { Operations, OperationsType } from '@/data/operations'

export async function generateStaticParams() {
  const paths = arrayOperationsId.map((operation) => {
    const lstOperationTypes: OperationsType[] = Object.values(Operations)
    lstOperationTypes.map((operationTypes) => {
      return {
        params: {
          id: operation,
          category: operationTypes,
        },
      }
    })
  })
  return paths
}

export type KnowLedgePageProps = {
  params: {
    id: string
    category: string
  }
}

const KnowLedgePage: React.FC<KnowLedgePageProps> = ({
  params: props,
}: KnowLedgePageProps) => {
  const { id, category } = props
  return <KnowLedgePageComponent id={id} category={category} />
}

export default KnowLedgePage
