import { useLayoutEffect, useState } from 'react'
import InnerPageWrapper from '../../components/InnerPageWrapper'
import WordsSearch from './WordsSearch'
import words from 'an-array-of-english-words'

/**
 * Purpose of these scenarios:
 * Test the most prominent "bottle necks"
 * of state usage and some hooks.
 */

const Words = () => {
  // const [wordsState] = useState<string[]>(words)
  // exceeding 5000 will cause stack to implode a bit
  const [amountOfWords, setAmountOfWords] = useState(0)

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
      {amountOfWords} of {words.length} rendered
      <br />
      <br />
      <input
        onChange={(e) => setAmountOfWords(Number(e.target.value))}
        type="range"
        min="1"
        max={words.length}
        value={amountOfWords}
        style={{ width: '100%' }}
      />
      <br />
      <br />
      <input
        onChange={(e) => setAmountOfWords(Number(e.target.value))}
        type="number"
        min="1"
        max={words.length}
        value={amountOfWords}
        style={{ width: '200px' }}
      />
      <br />
      <br />
      words rendered:
      <br />
      <br />
      <ul
        id="js__list-wrapper"
        style={{
          border: '1px solid lightgrey',
          borderRadius: '5px',
          padding: 10,
          maxHeight: '200px',
          overflow: 'scroll',
        }}
      >
        {words.slice(0, amountOfWords).map((word) => {
          // return <Word key={word} word={word} />
          return <li key={word}>{word}</li>
        })}
      </ul>
      <br />
      <br />
      <WordsSearch />
    </InnerPageWrapper>
  )
}

export default Words
