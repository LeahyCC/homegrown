import api from './index'

type PokemonGetType = {
  count: number
  next: string
  previous: string
  results: {
    name: string
    url: string
    id: number
    imageUrl: string
    animatedImageUrl: string
  }[]
}

/**
 * docs - https://github.com/sashafirsov/pokeapi-sprites
 * explore - https://unpkg.com/css-chain-test@1.0.8/src/PokeApi-Explorer.html
 *
 * image types
 * old school bit - https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png
 * old school bit animated - https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeID}.gif
 * clear crisp - https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg
 *
 */

export const pokemonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonList: builder.query<
      PokemonGetType,
      { offSet: number; limit: number }
    >({
      query: (arg) => {
        const { offSet, limit } = arg
        return {
          url: `pokemon?offset=${offSet}&limit=${limit}`,
        }
      },
      transformResponse: (response: PokemonGetType) => {
        return {
          count: response.count,
          next: response.next,
          previous: response.previous,
          results: response.results.map((poke) => {
            const pokemonId = Number(poke.url.split(`/`)[6])
            const baseImageUrl =
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
            const pokemonImageUrl = (pokeID: number) =>
              `${baseImageUrl}other/dream-world/${pokeID}.svg`
            const pokemonAnimatedImageUrl = (pokeID: number) =>
              `${baseImageUrl}versions/generation-v/black-white/animated/${pokeID}.gif`
            return {
              name: poke.name,
              url: poke.url,
              id: pokemonId,
              imageUrl: pokemonImageUrl(pokemonId),
              animatedImageUrl: pokemonAnimatedImageUrl(pokemonId),
            }
          }),
        }
      },
    }),
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const { useGetPokemonByIdQuery, useGetPokemonListQuery } = pokemonApi
