import { NavLink, Outlet } from "react-router-dom"
import logo from '../logo.svg'
import { routes } from "./routes"

export const Root = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React logo" />
        <ul>
          {
            routes.map(({name, to}) => (
              <li key={to}>
                <NavLink to={to} className={ ({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}