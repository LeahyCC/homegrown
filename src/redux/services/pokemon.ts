import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PokemonGetType = {
  count: number
  next: string
  previous: string
  results: { name: string; url: string }[]
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getAllPokemon: builder.query<PokemonGetType, void>({
      query: () => `pokemon`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi
