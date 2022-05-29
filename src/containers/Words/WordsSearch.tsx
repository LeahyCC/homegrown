import { useState } from 'react'
import words from 'an-array-of-english-words'

const WordsSearch = () => {
  const [search, setSearch] = useState('')
  const filtered = search ? words.filter((word) => word.includes(search)) : []

  return (
    <>
      <h1>Search for word</h1>
      <br />
      number of words: {''}
      {words.length}
      <br />
      <br />
      <input
        style={{ width: '200px' }}
        type="search"
        placeholder="Search for a word..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      Searched for:
      <br />
      <br />
      {words.includes(search)
        ? `${search} is in list`
        : !filtered.length
        ? 'nothing matches'
        : `is not in list`}
      <br />
      <br />
      {filtered.length} matches:
      <br />
      <br />
      <ul
        style={{
          border: '1px solid lightgrey',
          borderRadius: '5px',
          padding: 10,
          maxHeight: '200px',
          overflow: 'scroll',
        }}
      >
        {filtered.map((word) => {
          return <li key={word}>{word}</li>
        })}
      </ul>
    </>
  )
}

export default WordsSearch
