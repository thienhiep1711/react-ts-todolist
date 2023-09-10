import { FC, ReactNode, useState } from 'react'
import PageLayout from '../../components/core/PageLayout'
import setting from './setting'

interface TodoListProps {
  children: ReactNode
}

const TodoList: FC<TodoListProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <PageLayout setting={setting}>
      <div className="flex justify-center">
        <div className="flex-col">
          <div className="flex w-full max-w-[600px]">
            {children}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default TodoList
