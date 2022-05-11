import React, { useState } from 'react'
import { useGetPokemonListQuery } from '../../redux/services/pokemon'
import LoadingSpinner from '../LoadingSpinner'
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

  const updateLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimitNumber(Number(e.target.value))
  }

  const formatResponse = (res: string) => {
    // get the offset number of the next or retreat set
    // https://regex101.com/r/TD1tK2/1
    const offSetResult = res.match(`(?<=set=).+(?=&)`) ?? [0]
    return Number(offSetResult[0])
  }

  const setListOffSet = (type: 'forward' | 'back') => {
    type === 'forward'
      ? pokemonList?.next && setOffSetNumber(formatResponse(pokemonList.next))
      : pokemonList?.previous &&
        setOffSetNumber(formatResponse(pokemonList.previous))
  }

  return (
    <div className="pokemonGenerator">
      Showing: {limitNumber}
      <input
        onChange={updateLimit}
        type="range"
        min="1"
        max={pokemonList?.count}
        value={limitNumber}
      />
      <div>1 - {pokemonList?.count}</div>
      <br />
      <div style={{ display: 'flex' }}>
        <button onClick={() => setListOffSet('back')}>Back</button>
        <button onClick={() => setListOffSet('forward')}>Next</button>
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
              const hasImage = Boolean(poke.imageUrl || poke.animatedImageUrl)
              return (
                <div key={poke.name} className="pokemonGenerator__pokemon">
                  {hasImage && (
                    <img
                      className="pokemonGenerator__pokemon-image"
                      alt="poke mon"
                      src={
                        imageType === 'svg'
                          ? poke.imageUrl
                          : poke.animatedImageUrl
                      }
                    />
                  )}
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
