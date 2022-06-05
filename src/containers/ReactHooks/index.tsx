import InnerPageWrapper from '@/components/InnerPageWrapper'
import { Link } from 'react-router-dom'

const ReactHooks = () => {
  return (
    <InnerPageWrapper>
      React Hooks
      <span>test</span>
      <Link to="/react-hooks/useState">useState</Link>
    </InnerPageWrapper>
  )
}
export default ReactHooks
