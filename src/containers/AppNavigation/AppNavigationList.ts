import { MdCatchingPokemon } from 'react-icons/md'
import { HiOutlineCode } from 'react-icons/hi'

import Home from '../Home'
import About from '../About'

export type navItem = {
  to: string
  icon: JSX.Element
  title: string
}

export const navURLS = {
  home: {
    url: '/',
    component: Home,
  },
  about: {
    url: '/about',
    component: About,
  },
}

export const itemList: navItem[] = [
  {
    to: navURLS.home.url,
    icon: MdCatchingPokemon({ size: '100%' }),
    title: 'Pokemon',
  },
  {
    to: navURLS.about.url,
    icon: HiOutlineCode({ size: '100%' }),
    title: 'About',
  },
]
