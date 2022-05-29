import { ReactNode } from 'react'
import './index.scss'

type InnerPageWrapperProps = {
  children: ReactNode | ReactNode[]
}
const InnerPageWrapper = ({ children }: InnerPageWrapperProps) => {
  return <div className="inner-page-container__wrapper">{children}</div>
}

export default InnerPageWrapper
