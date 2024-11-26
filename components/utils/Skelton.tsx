export type SkeletonProps = {
  className?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-300 mx-4 rounded ${className}`} />
  )
}

export default Skeleton
