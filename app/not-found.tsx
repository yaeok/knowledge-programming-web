import NextLink from 'next/link'

import Header from '@/components/utils/Header'

const NotFound: React.FC = () => {
  return (
    <div>
      <Header />

      <section className='min-h-screen flex flex-col justify-center items-center text-black space-y-4'>
        <h1 className='text-4xl font-bold'>404 Not Found</h1>
        <p className='text-base'>ページが見つかりませんでした。</p>
        <NextLink
          href='/'
          className='px-4 py-2 text-base text-white rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600'
        >
          ホームへ戻る
        </NextLink>
      </section>
    </div>
  )
}

export default NotFound
