'use client'

import React from 'react';

import Card from '@/components/KnowLedgePage/components/Card';
import Main from '@/components/utils/Main';
import { getOperations, toOperationsType } from '@/data/operations';
import { OperationCategory, OperationDetail } from '@/domain/entity/operation';

export type KnowLedgePageComponentProps = {
  id: string
  category: string
}

const KnowLedgePageComponent: React.FC<KnowLedgePageComponentProps> = (
  props: KnowLedgePageComponentProps
) => {
  const { id, category } = props
  const [operationCategory, setOperationCategory] =
    React.useState<OperationCategory>()
  const [details, setDetails] = React.useState<OperationDetail[]>([])

  React.useEffect(() => {
    const fetchDatas = async () => {
      console.log('category' + category)
      console.log('id' + id)

      const convCategory = toOperationsType(category)
      if (!convCategory) {
        return
      }
      const operations: OperationCategory[] = getOperations(convCategory)
      setOperationCategory(
        operations.find((f: OperationCategory) => f.id === id)
      )
      setDetails(
        operations.filter((f: OperationCategory) => f.id === id)[0].functions
      )
    }
    fetchDatas()
  }, [id, category])
  return (
    <Main style='py-12'>
      <section className='text-center py-12'>
        <h1 className='text-2xl font-bold'>
          {/* <span className='text-2xl font-bold'>Q.</span> */}
          {operationCategory?.title}
        </h1>
      </section>
      <section className='w-full lg:w-2/3 lg:mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {details.map((detail: OperationDetail) => (
          <Card
            key={detail.name}
            id={id}
            qid={detail.id}
            category={operationCategory!.category}
            title={detail.name}
            description={detail.description}
            returnValue={detail.return}
            markdown={detail.code}
          />
        ))}
      </section>
    </Main>
  )
}

export default KnowLedgePageComponent
