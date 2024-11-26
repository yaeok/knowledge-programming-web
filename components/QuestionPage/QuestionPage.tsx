'use client'

import '@/app/globals.css'

import React from 'react'

import QuestionToggle from '@/components/QuestionPage/components/QuestionToggle'
import Main from '@/components/utils/Main'
import {
  getOperationTitle,
  getQuestions,
  toOperationsType,
} from '@/data/operations'
import { QuestionCategory } from '@/domain/entity/question'

export type QuestionPageComponentProps = {
  qid: string
  category: string
}

const QuestionPageComponent: React.FC<QuestionPageComponentProps> = (
  props: QuestionPageComponentProps
) => {
  const { qid, category } = props
  const [questions, setQuestions] = React.useState<QuestionCategory>()
  const [titleCategory, setTitleCategory] = React.useState<string>('')

  React.useEffect(() => {
    const fetchQuestions = async () => {
      const convCategory = toOperationsType(category)
      if (!convCategory) {
        return
      }
      const operations: QuestionCategory[] = getQuestions(convCategory)
      setTitleCategory(getOperationTitle(convCategory))

      const questions = operations.find((question) => question.id === qid)

      setQuestions(questions)
    }
    fetchQuestions()
  }, [])

  return (
    <Main style='w-full'>
      <section className='w-full py-12 lg:w-2/3 lg:mx-auto'>
        <section className='py-16 flex flex-col items-center lg:space-x-8'>
          <h1 className='text-3xl font-bold'>{titleCategory}</h1>
        </section>
        <div className='grid grid-cols-1 gap-6'>
          {questions?.questions.map((question, index) => (
            <div key={index}>
              <QuestionToggle
                index={index}
                question={question.question}
                code={question.code}
                answer={question.answer}
              />
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default QuestionPageComponent
