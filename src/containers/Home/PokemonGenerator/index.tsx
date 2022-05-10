import { useState } from 'react'
import { useGetPokemonListQuery } from '../../../redux/services/pokemon'
import LoadingSpinner from '../../../components/LoadingSpinner'
import './index.scss'

const PokemonGenerator = () => {
  const [imageType, setImageType] = useState('svg')
  const [offSetNumber, setOffSetNumber] = useState(0)
  const [limitNumber, setLimitNumber] = useState(6)
  const {
    data: pokemonList,
    isLoading,
    isFetching,
  } = useGetPokemonListQuery({ offSet: offSetNumber, limit: limitNumber })

  const updateLimit = (e: any) => {
    setLimitNumber(e.target.value)
  }
  console.log('setLimitNumber', limitNumber)

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
      <input
        onChange={updateLimit}
        type="range"
        min="1"
        max="12"
        value={limitNumber}
      />
      <div style={{ display: 'flex' }}>
        <button onClick={retreatListBy}>Back</button>
        <button onClick={advanceListBy}>Next</button>
      </div>
      <div>
        <input
          onChange={() => setImageType('svg')}
          checked={imageType === 'svg'}
          type="radio"
          value="svg"
          name="svg"
        />{' '}
        svg
        <input
          onChange={() => setImageType('gif')}
          checked={imageType === 'gif'}
          type="radio"
          value="gif"
          name="gif"
        />{' '}
        Gif
      </div>
      <div>{limitNumber}</div>

      {isLoading || isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="pokemonGenerator__pokemon-w">
            {pokemonList?.results.map((poke) => {
              return (
                <div key={poke.name} className="pokemonGenerator__pokemon">
                  <img
                    className="pokemonGenerator__pokemon-image"
                    alt="poke mon"
                    src={
                      imageType === 'svg'
                        ? poke.imageUrl
                        : poke.animatedImageUrl
                    }
                  />
                  <div className="pokemonGenerator__pokemon-name">
                    {poke.name}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default PokemonGenerator
