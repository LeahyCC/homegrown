import { useState } from 'react'
import { useGetAllPokemonQuery } from '../../redux/services/pokemon'

const PokemonGenerator = () => {
  const [nextListCount, setNextListCount] = useState(0)
  const { data, isLoading, isFetching } = useGetAllPokemonQuery(nextListCount)

  const formatResponse = (res: string) => {
    const next = res.match(`(?<=set=).+(?<=&)`) ?? []
    return Number(next[0].slice(0, -1))
  }

  const advanceListBy = () => {
    data && setNextListCount(formatResponse(data.next))
  }
  const retreatListBy = () => {
    data && setNextListCount(formatResponse(data.previous))
  }

  return (
    <div>
      {isLoading || isFetching ? (
        <>Loading!</>
      ) : (
        <>
          {data?.results.map((poke, index) => {
            return <div key={index}>{poke.name}</div>
          })}
          <div style={{ display: 'flex' }}>
            {nextListCount !== 0 && (
              <button onClick={retreatListBy}>Back</button>
            )}
            <button onClick={advanceListBy}>Next</button>
          </div>
        </>
      )}
    </div>
  )
}

export default PokemonGenerator
