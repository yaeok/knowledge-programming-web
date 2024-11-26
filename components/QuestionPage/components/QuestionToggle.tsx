import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { CodeBlock } from '../../utils/CodeBlock'

export type QuestionToggleProps = {
  index: number
  question: string
  code: string
  answer: string
}

const QuestionToggle = (props: QuestionToggleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAnswer = () => {
    setIsOpen(!isOpen)
  }

  // 設定する最大高さ
  const maxHeight = isOpen ? '500px' : '0px'

  return (
    <section className='border-b-2 pb-4 border-gray-600 mx-12 space-y-2'>
      <section className='flex flex-col space-y-4'>
        <h2 className='text-3xl font-bold'>Q. {props.index + 1}</h2>
        <p className='px-4'>{props.question}</p>
      </section>
      <section className='markdown'>
        <ReactMarkdown components={{ code: CodeBlock }}>
          {props.code}
        </ReactMarkdown>
      </section>
      <section>
        <button
          className='p-4 rounded-md flex justify-between items-center w-full text-left font-medium text-sky-800 hover:bg-gray-300 focus:outline-none'
          onClick={toggleAnswer}
        >
          <p className='text-sm'>
            答えを{!isOpen ? '表示する' : '非表示にする'}
          </p>
          <svg
            className={`w-5 h-5 duration-500 transform transition-transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
        <div
          className='markdown overflow-hidden transition-height duration-500'
          style={{ maxHeight }}
        >
          <ReactMarkdown components={{ code: CodeBlock }}>
            {props.answer}
          </ReactMarkdown>
        </div>
      </section>
    </section>
  )
}

export default QuestionToggle
