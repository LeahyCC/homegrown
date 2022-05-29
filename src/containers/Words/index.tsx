import { useLayoutEffect, useState } from 'react'
import InnerPageWrapper from '../../components/InnerPageWrapper'
// import Word from './word'
import words from 'an-array-of-english-words'

const Words = () => {
  const [wordsState] = useState<string[]>(words)
  const [amountOfWords, setAmountOfWords] = useState(10)

  const listWrap = document.getElementById('js__list-wrapper')
  useLayoutEffect(() => {
    const lastElem = listWrap?.lastElementChild
    lastElem?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }, [amountOfWords])

  return (
    <InnerPageWrapper>
      {amountOfWords} of {wordsState.length} rendered
      <br />
      <br />
      <input
        onChange={(e) => setAmountOfWords(Number(e.target.value))}
        type="range"
        min="1"
        max={wordsState.length}
        value={amountOfWords}
        style={{ width: '100%' }}
      />
      <br />
      <br />
      <ul
        id="js__list-wrapper"
        style={{
          border: '1px solid grey',
          borderRadius: '5px',
          padding: 10,
          maxHeight: '200px',
          overflow: 'scroll',
        }}
      >
        {wordsState.slice(0, amountOfWords).map((word) => {
          /**
           * only for testing rerenders
           * whats the most prominent "bottle neck"
           */
          // return <Word key={word} word={word} />
          return <li key={word}>{word}</li>
        })}
      </ul>
    </InnerPageWrapper>
  )
}

export default Words
