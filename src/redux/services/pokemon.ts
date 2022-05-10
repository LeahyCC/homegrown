import api from './index'

type PokemonGetType = {
  next: string
  previous: string
  results: { name: string; url: string; id: number; imageUrl: string }[]
}

const API_GET_LIST_LIMIT = 6

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
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getPokemonList: builder.query<PokemonGetType, number | void>({
      query: (offSet = 0) =>
        `pokemon?offset=${offSet}&limit=${API_GET_LIST_LIMIT}`,
      transformResponse: (response: PokemonGetType) => {
        return {
          next: response.next,
          previous: response.previous,
          results: response.results.map((poke) => {
            const pokemonId = Number(poke.url.split(`/`)[6])
            const pokemonImageUrl = (pokeID: number) =>
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`

            return {
              name: poke.name,
              url: poke.url,
              id: pokemonId,
              imageUrl: pokemonImageUrl(pokemonId),
            }
          }),
        }
      },
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi
