import { Link, useLocation } from 'react-router-dom'
import { DiAtom } from 'react-icons/di'
import { navList } from './AppNavigationList'
import './stylesAppNavigationList.scss'

export const AppNavigation = () => {
  const navItems = () => {
    const location = useLocation()

    return navList.map((navItem) => {
      const activeLink = location.pathname === navItem.to
      return (
        <Link
          className={activeLink ? 'nav__item nav__item--active' : 'nav__item'}
          to={navItem.to}
          key={navItem.title}
        >
          <div className="nav__item-icon">{navItem.icon}</div>
          <div className="nav__item-title">{navItem.title}</div>
        </Link>
      )
    })
  }

  return (
    <nav className="nav__w">
      <div className="nav__logo">
        <DiAtom size="100%" />
      </div>
      <ul>{navItems()}</ul>
    </nav>
  )
}

export default AppNavigation
