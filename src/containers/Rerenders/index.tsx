/* eslint-disable no-console */
import { useState, useCallback } from 'react'
import InnerPageWrapper from '@/components/InnerPageWrapper'

import ChildComponent from './ChildComponent'
import ChildComponentTwo from './ChildComponentTwo'

export const Rerenders = () => {
  const [count, setCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [childCountTwo, setChildCountTwo] = useState(0)

  console.log('Parent rendered')

  const updateCount = () => {
    setCount((prev) => prev + 1)
  }

  const updateChildCount = useCallback(() => {
    setChildCount((prev) => prev + 1)
  }, [childCount])

  const updateChildCountTwo = useCallback(() => {
    setChildCountTwo((prev) => prev + 1)
  }, [])

  // const updateChildCount = () => {
  //   setChildCount((prev) => prev + 1)
  // }
  // const updateChildCountTwo = () => {
  //   setChildCountTwo((prev) => prev + 1)
  // }

  return (
    <InnerPageWrapper>
      <h1>Rerenders</h1>
      <p>Count: {count}</p>
      <p>Child Count: {childCount}</p>
      <p>Child Count Two: {childCountTwo}</p>
      <button onClick={updateCount}>Increment</button>
      <ChildComponent setChildCount={updateChildCount} />
      <ChildComponentTwo setChildCountTwo={updateChildCountTwo} />
    </InnerPageWrapper>
  )
}
