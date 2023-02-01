/* eslint-disable no-console */
import { useState, Dispatch, SetStateAction, memo } from 'react'

type ChildComponentProps = {
  setChildCountTwo: Dispatch<SetStateAction<void>>
}

const ChildComponent = ({ setChildCountTwo }: ChildComponentProps) => {
  const [count, setCount] = useState(0)

  console.log('Child TWO rendered')

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Child TWO Component</h1>
      <p>Count: {count}</p>
      <button onClick={updateCount}>Increment</button>
      <button onClick={() => setChildCountTwo()}>Increment from Parent</button>
    </div>
  )
}

export default memo(ChildComponent)
// export default ChildComponent
