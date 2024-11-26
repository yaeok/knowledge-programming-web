import NextLink from 'next/link'

export type CardProps = {
  id: string
  title: string
  category: string
}

const Card: React.FC<CardProps> = ({ id, title, category }: CardProps) => {
  return (
    <section className='bg-white px-4 py-8 shadow-lg rounded-md hover:shadow-none hover:translate-y-1 duration-300'>
      <NextLink
        href={{
          pathname: `/document/${id}/${category}`,
        }}
      >
        <span className='text-xl font-semibold hover:border-b-2 border-indigo-800 hover:text-indigo-800'>
          {title}
        </span>
      </NextLink>
    </section>
  )
}

export default Card
