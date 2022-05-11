import { MdCatchingPokemon } from 'react-icons/md'
import { HiOutlineCode } from 'react-icons/hi'

import Pokemon from '../Pokemon'
import About from '../About'

export type navItem = {
  to: string
  icon: JSX.Element
  title: string
}

export const navURLS = {
  about: {
    url: '/',
    component: About,
  },
  pokemon: {
    url: '/pokemon',
    component: Pokemon,
  },
}

export const itemList: navItem[] = [
  {
    to: navURLS.about.url,
    icon: HiOutlineCode({ size: '100%' }),
    title: 'About',
  },
  {
    to: navURLS.pokemon.url,
    icon: MdCatchingPokemon({ size: '100%' }),
    title: 'Pokemon',
  },
]
