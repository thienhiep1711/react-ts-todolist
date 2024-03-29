import { FC, ReactNode, useState } from 'react'
import PageLayout from '../../components/core/PageLayout'
import setting from './setting'

interface DashboardProps {
  children?: ReactNode
}

const Dashboard: FC<DashboardProps> = () => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (value: string) => {
    setInputValue(value)
  }
  return (
    <PageLayout setting={setting}>
      <div className="flex justify-center">
        <div className="flex-col">
          <div className="flex w-full max-w-[600px]">
            <h1 className="h4 mb-3 text-primary">Dashboard</h1>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Dashboard
