import { ReactNode } from 'react'

interface IContainerProps {
  children: ReactNode
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>{children}</div>
  )
}

export default Container
