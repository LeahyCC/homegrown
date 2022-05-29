import { Link, useLocation } from 'react-router-dom'
import { DiAtom } from 'react-icons/di'
import { itemList } from './AppNavigationList'
import './stylesAppNavigationList.scss'

export const AppNavigation = () => {
  const navItems = () => {
    const location = useLocation()

    return itemList.map((item) => {
      const activeLink = location.pathname === item.to
      return (
        <Link
          className={activeLink ? 'nav__item nav__item--active' : 'nav__item'}
          to={item.to}
          key={item.title}
        >
          <div className="nav__item-icon">{item.icon}</div>
          <div className="nav__item-title">{item.title}</div>
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
