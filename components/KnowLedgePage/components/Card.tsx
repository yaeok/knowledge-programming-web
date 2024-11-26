import ReactMarkdown from 'react-markdown'

import { CodeBlock } from '@/components/utils/CodeBlock'
import { OperationsType } from '@/data/operations'

import NextButton from './NextButton'

export type CardProps = {
  id: string
  qid: string
  title: string
  category: OperationsType
  description: string
  returnValue?: string
  markdown: string
}

const Card: React.FC<CardProps> = ({
  id,
  qid,
  title,
  category,
  description,
  returnValue,
  markdown,
}: CardProps) => {
  return (
    <section className='bg-white p-8 shadow-lg rounded-md flex flex-col justify-between space-y-4'>
      <div className='space-y-2'>
        <div className='w-full'>
          <div className='markdown'>
            <ReactMarkdown
              components={{
                code: CodeBlock,
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
        <h2 className='text-2xl font-bold'>{title}</h2>
      </div>
      <p className='flex-wrap-reverse'>{description}</p>
      <div className='space-y-4'>
        <span className='w-fit px-2 py-1 rounded-sm bg-gray-600 text-white'>
          戻り値
        </span>
        <p className='px-4'>{returnValue}</p>
      </div>
      <NextButton id={id} qid={qid} category={category} />
    </section>
  )
}

export default Card
