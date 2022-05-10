/**
 * 'reduxjs/toolkit/query/react'
 * React-specific entry point that automatically generates
 * hooks corresponding to the defined endpoints
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: () => ({}),
})

export default api
