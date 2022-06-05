import { MdCatchingPokemon, MdStickyNote2 } from 'react-icons/md'
import { GiInterceptorShip, GiArrowCursor, GiPirateHook } from 'react-icons/gi'
import { GrGraphQl } from 'react-icons/gr'

export type navItem = {
  to: string
  icon: JSX.Element
  title: string
}

export const navList: navItem[] = [
  {
    to: '/',
    icon: GiArrowCursor({ size: '100%' }),
    title: 'Cursor',
  },
  {
    to: '/pokemon',
    icon: MdCatchingPokemon({ size: '100%' }),
    title: 'Pokemon',
  },
  {
    to: '/words',
    icon: MdStickyNote2({ size: '100%' }),
    title: 'Words',
  },
  {
    to: '/star-wars',
    icon: GiInterceptorShip({ size: '100%' }),
    title: 'StarWars',
  },
  {
    to: '/graphql',
    icon: GrGraphQl({ size: '100%' }),
    title: 'GraphQL',
  },
  {
    to: '/react-hooks',
    icon: GiPirateHook({ size: '100%' }),
    title: 'ReactHooks',
  },
]
