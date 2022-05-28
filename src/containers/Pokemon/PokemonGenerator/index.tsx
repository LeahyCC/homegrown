import React, { useState } from 'react'
import { useGetPokemonListQuery } from '../../../redux/services/pokemon'
import LoadingSpinner from '../../../components/LoadingSpinner'
import noImageFound from './noimagefound.jpg'
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

  const nextList = () => {
    pokemonList?.next && setOffSetNumber(formatResponse(pokemonList.next))
  }
  const backList = () => {
    pokemonList?.previous &&
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
      <br />
      <div style={{ display: 'flex' }}>
        <button onClick={backList}>Back</button>
        <button onClick={nextList}>Next</button>
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
      <br />
      <br />
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
                    onError={(e: any) => {
                      e.target.src = noImageFound
                    }}
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
