import Link from 'next/link'

const SideNav = () => {
  return (
    <div className='w-full h-full p-6 bg-white shadow-xl shadow-gray-400 rounded-lg'>
      <ul>
        <li className='py-1'>
          <Link href='/question/generate'>
            <span className='noto_sans_jp hover:border-b-2 hover:border-indigo-500 hover:text-indigo-500'>
              TypeScript
            </span>
          </Link>
        </li>
        <li className='py-1'>
          <Link href='/question/list'>
            <span className='noto_sans_jp hover:border-b-2 hover:border-indigo-500 hover:text-indigo-500'>
              Flutter
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
