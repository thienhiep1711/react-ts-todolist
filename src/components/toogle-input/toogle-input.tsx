import { FC, ReactNode } from 'react'

interface ToogleInputProps {
  children: ReactNode
}

const ToogleInput: FC<ToogleInputProps> = ({ children }) => {
  return <div>{children || 'ToogleInputProps'}</div>
}

export default ToogleInput