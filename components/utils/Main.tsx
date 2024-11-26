export type MainProps = {
  children: React.ReactNode
  style?: string
}

const Main: React.FC<MainProps> = (props: MainProps) => {
  return (
    <main className={`bg-gray-100 mx-auto ${props.style}`}>
      {props.children}
    </main>
  )
}

export default Main
