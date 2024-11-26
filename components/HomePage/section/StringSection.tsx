'use client'

import React from 'react'

import Card from '@/components/HomePage/Card'
import Label from '@/components/HomePage/Label'
import Skeleton from '@/components/utils/Skelton'
import { Operations } from '@/data/operations'
import { stringOperations } from '@/data/String/string_operations'
import { OperationCategory } from '@/domain/entity/operation'

const StringSection: React.FC = () => {
  const [strings, setStrings] = React.useState<OperationCategory[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const fetchStrings = async () => {
      setStrings(stringOperations)
      setLoading(false)
    }
    fetchStrings()
  }, [])

  return (
    <section>
      <Label operationsCategory={Operations.STRING} />
      {loading ? (
        <Skeleton className='w-full h-24' />
      ) : (
        <section className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {strings.map((string: OperationCategory) => (
            <Card
              key={string.id}
              id={string.id}
              title={string.title}
              category={Operations.STRING}
            />
          ))}
        </section>
      )}
    </section>
  )
}

export default StringSection
