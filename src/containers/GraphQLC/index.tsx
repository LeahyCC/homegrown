import InnerPageWrapper from '@/components/InnerPageWrapper'
import type { Query, QueryGetFuzzyPokemonArgs } from '@favware/graphql-pokemon'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

type GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> = Record<
  K,
  Omit<Query[K], '__typename'>
>

const getFuzzyPokemon = gql`
  query getFuzzyPokemon($pokemon: String!) {
    getFuzzyPokemon(pokemon: $pokemon) {
      sprite
      num
      species
      color
    }
  }
`

const apolloClient = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/',
  fetch,
})

const {
  data: { getFuzzyPokemon: pokemonData },
} = await apolloClient.query<
  GraphQLPokemonResponse<'getFuzzyPokemon'>,
  QueryGetFuzzyPokemonArgs
>({
  query: getFuzzyPokemon,
  variables: { pokemon: 'pikachu' },
})

const GraphQLC = () => {
  return (
    <InnerPageWrapper>
      {pokemonData.map((pokemon) => {
        return (
          <div key={pokemon.species}>
            <h1>{pokemon.species}</h1>
            <br />
            <img alt={pokemon.species} src={pokemon.sprite} />
          </div>
        )
      })}
    </InnerPageWrapper>
  )
}

export default GraphQLC
