import { useEffect, useState } from 'react'

type wordProps = {
  word: string
}

const Word = ({ word }: wordProps) => {
  const [wordState, setWordState] = useState(word ?? '')

  useEffect(() => {
    setWordState(word)
  }, [word])
  return <li>{wordState}</li>
}

export default Word
