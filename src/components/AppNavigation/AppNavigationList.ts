import { MdCatchingPokemon, MdStickyNote2 } from 'react-icons/md'
import { HiOutlineCode } from 'react-icons/hi'

import Pokemon from '../../containers/Pokemon'
import About from '../../containers/About'
import Words from '../../containers/Words'

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
  words: {
    url: '/words',
    component: Words,
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
  {
    to: navURLS.words.url,
    icon: MdStickyNote2({ size: '100%' }),
    title: 'Words',
  },
]
