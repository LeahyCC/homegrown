import { useState } from 'react'
import { useGetPokemonListQuery } from '../../redux/services/pokemon'
import './pokemonGenerator.scss'

const PokemonGenerator = () => {
  const [offSetNumber, setOffSetNumber] = useState(0)
  const {
    data: pokemonList,
    isLoading,
    isFetching,
  } = useGetPokemonListQuery(offSetNumber)

  const formatResponse = (res: string) => {
    // get the offset number of the next or retreat set
    // https://regex101.com/r/TD1tK2/1
    const offSetResult = res.match(`(?<=set=).+(?=&)`) ?? [0]
    return Number(offSetResult[0])
  }

  const advanceListBy = () => {
    pokemonList?.next && setOffSetNumber(formatResponse(pokemonList.next))
  }
  const retreatListBy = () => {
    pokemonList?.previous &&
      setOffSetNumber(formatResponse(pokemonList.previous))
  }

  return (
    <div className="pokemonGenerator">
      {isLoading || isFetching ? (
        <>Loading!</>
      ) : (
        <>
          <div className="pokemonGenerator__pokemon-w">
            {pokemonList?.results.map((poke) => {
              return (
                <div key={poke.name} className="pokemonGenerator__pokemon">
                  <img
                    className="pokemonGenerator__pokemon-image"
                    alt="poke mon"
                    src={poke.imageUrl}
                  />
                  <div className="pokemonGenerator__pokemon-name">
                    {poke.name}
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex' }}>
            <button onClick={retreatListBy}>Back</button>
            <button onClick={advanceListBy}>Next</button>
          </div>
        </>
      )}
    </div>
  )
}

export default PokemonGenerator
