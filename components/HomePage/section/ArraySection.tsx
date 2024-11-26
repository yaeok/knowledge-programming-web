'use client'

import React from 'react'

import Card from '@/components/HomePage/Card'
import Label from '@/components/HomePage/Label'
import Skeleton from '@/components/utils/Skelton'
import { arrayOperations } from '@/data/Array/array_operations'
import { Operations } from '@/data/operations'
import { OperationCategory } from '@/domain/entity/operation'

const ArraySection: React.FC = () => {
  const [arrays, setArrays] = React.useState<OperationCategory[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  React.useEffect(() => {
    const fetchArrays = async () => {
      setArrays(arrayOperations)
      setLoading(false)
    }
    fetchArrays()
  }, [])

  return (
    <section>
      <Label operationsCategory={Operations.ARRAY} />
      {loading ? (
        <Skeleton className='w-full h-24' />
      ) : (
        <section className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {arrays.map((array: OperationCategory) => (
            <Card
              key={array.id}
              id={array.id}
              title={array.title}
              category={Operations.ARRAY}
            />
          ))}
        </section>
      )}
    </section>
  )
}

export default ArraySection
