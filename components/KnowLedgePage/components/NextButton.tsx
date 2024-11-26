import Link from 'next/link'

export type NextButtonProps = {
  id: string
  qid: string
  category: string
}

const NextButton: React.FC<NextButtonProps> = (props: NextButtonProps) => {
  return (
    <section className='w-full flex justify-end'>
      <Link
        href={{
          pathname: `/document/${props.id}/${props.category}/${props.qid}`,
        }}
        className='px-4 py-2 rounded-md text-white bg-indigo-500 shadow-lg hover:bg-indigo-800 hover:shadow-none hover:translate-y-0.5 duration-200'
      >
        <span className='font-medium'>問題へ</span>
      </Link>
    </section>
  )
}

export default NextButton
