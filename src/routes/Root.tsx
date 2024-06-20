import { NavLink, Outlet } from "react-router-dom"
import logo from '../logo.svg'

export const Root = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React logo" />
        <ul>
          <li>
            <NavLink className={ ({isActive}) => isActive ? 'nav-active' : ''} to="/lazy1">Lazy1</NavLink>
          </li>
          <li>
            <NavLink className={ ({isActive}) => isActive ? 'nav-active' : ''} to="/lazy2">Lazy2</NavLink>
          </li>
          <li>
            <NavLink className={ ({isActive}) => isActive ? 'nav-active' : ''} to="/lazy3">Lazy3</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}