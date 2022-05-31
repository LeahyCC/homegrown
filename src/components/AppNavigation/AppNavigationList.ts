import { MdCatchingPokemon, MdStickyNote2 } from 'react-icons/md'
import { HiOutlineCode } from 'react-icons/hi'
import { GiInterceptorShip } from 'react-icons/gi'
import { GrGraphQl } from 'react-icons/gr'

export type navItem = {
  to: string
  icon: JSX.Element
  title: string
}

export const navList: navItem[] = [
  {
    to: '/',
    icon: HiOutlineCode({ size: '100%' }),
    title: 'About',
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
]
