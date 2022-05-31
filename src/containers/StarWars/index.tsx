import { useEffect, useState } from 'react'
import InnerPageWrapper from '@/components/InnerPageWrapper'

type resProps = {
  count: number
  next: string
  previous: string
  results: {
    name: string
  }[]
}

const StarWars = () => {
  const [starWarsData, setStarWarsData] = useState<resProps>()

  const fetchStarWarsSS = (type?: 'next' | 'prev') => {
    const base = 'https://swapi.dev/api/starships/'
    const isNext = type === 'next' && starWarsData?.next
    const isPrev = type === 'prev' && starWarsData?.previous
    const url = isNext
      ? starWarsData.next
      : isPrev
      ? starWarsData.previous
      : base

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setStarWarsData(data)
      })
      .catch((reasons) => {
        console.error(reasons)
      })
  }

  useEffect(() => {
    fetchStarWarsSS()
  }, [])

  return (
    <InnerPageWrapper>
      {starWarsData?.previous && (
        <button onClick={() => fetchStarWarsSS('prev')}>Previous</button>
      )}
      <ul>
        {starWarsData?.results.map((ship) => {
          return <li key={ship.name}>{ship.name}</li>
        })}
      </ul>
      {starWarsData?.next && (
        <button onClick={() => fetchStarWarsSS('next')}>Next</button>
      )}
    </InnerPageWrapper>
  )
}

export default StarWars
