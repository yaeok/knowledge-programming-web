import React from 'react'

import ArraySection from '@/components/HomePage/section/ArraySection'
import DateSection from '@/components/HomePage/section/DateSection'
import StringSection from '@/components/HomePage/section/StringSection'
import Main from '@/components/utils/Main'

// import SideNav from '@/components/utils/SideNav'

const HomePage: React.FC = () => {
  const page: React.FC[] = [ArraySection, StringSection, DateSection]
  return (
    <section>
      <Main>
        <section className='w-4/5 mx-auto flex flex-row'>
          {/* <div className='w-1/4 sticky top-0 left-0 h-1/2 z-40 py-24'>
            <SideNav />
          </div> */}
          <div className='w-full flex flex-col py-12'>
            <section className='text-center py-12'>
              <h1 className='text-4xl sm:text-5xl font-bold'>TypeScript</h1>
              <p className='mt-4'>
                TypeScriptの知識を問題形式で学ぶサービスです。
              </p>
            </section>
            <div className='flex flex-col space-y-4'>
              {page.map((Component, index) => (
                <Component key={index} />
              ))}
            </div>
          </div>
        </section>
      </Main>
    </section>
  )
}

export default HomePage
