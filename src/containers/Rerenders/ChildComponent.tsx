/* eslint-disable no-console */
import { useState, Dispatch, SetStateAction, memo } from 'react'

type ChildComponentProps = {
  setChildCount: Dispatch<SetStateAction<void>>
}

const ChildComponent = ({ setChildCount }: ChildComponentProps) => {
  const [count, setCount] = useState(0)

  console.log('Child ONE rendered')

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Child Component</h1>
      <p>Count: {count}</p>
      <button onClick={updateCount}>Increment</button>
      <button onClick={() => setChildCount()}>Increment from Parent</button>
    </div>
  )
}

export default memo(ChildComponent)
// export default ChildComponent
