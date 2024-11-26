'use client'

import React from 'react'

import Card from '@/components/HomePage/Card'
import Label from '@/components/HomePage/Label'
import Skeleton from '@/components/utils/Skelton'
import { dateOperations } from '@/data/Date/date_operations'
import { Operations } from '@/data/operations'
import { OperationCategory } from '@/domain/entity/operation'

const DateSection: React.FC = () => {
  const [dates, setDates] = React.useState<OperationCategory[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const fetchDates = async () => {
      setDates(dateOperations)
      setLoading(false)
    }
    fetchDates()
  }, [])

  return (
    <section>
      <Label operationsCategory={Operations.DATE} />
      {loading ? (
        <Skeleton className='w-full h-24' />
      ) : (
        <section className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {dates.map((array: OperationCategory) => (
            <Card
              key={array.id}
              id={array.id}
              title={array.title}
              category={Operations.DATE}
            />
          ))}
        </section>
      )}
    </section>
  )
}

export default DateSection
