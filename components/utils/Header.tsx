import NextLink from 'next/link'

const Header: React.FC = () => {
  return (
    <header className='w-full bg-indigo-800 text-white px-6 py-2 flex justify-between items-center fixed top-0 z-50'>
      <div className='w-3/4 mx-auto'>
        <NextLink href='/'>
          <h1 className='text-2xl font-bold'>KnowLedge</h1>
        </NextLink>
        <nav className='hidden'>
          <ul className='flex space-x-4'>
            <li>
              <NextLink href='#'>
                <p className='hover:text-gray-300 text-sm md:text-base'>
                  サービス概要
                </p>
              </NextLink>
            </li>
            <li>
              <NextLink href='#'>
                <p className='hover:text-gray-300 text-sm md:text-base'>
                  新規登録
                </p>
              </NextLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
