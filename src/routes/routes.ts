import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import { About, Users } from "../pages";

type JSXComponent = () => JSX.Element

interface Route{
  to:        string
  path:      string
  Component: JSXComponent
  name:      string
}

export const routes:Route[] = [
  {
    to: '/',
    path: '',
    Component: ShoppingPage,
    name: 'ShoppingPage'
  },
  {
    to: '/about',
    path: 'about',
    Component: About,
    name: 'About'
  },
  {
    to: '/users',
    path: 'users',
    Component: Users,
    name: 'Users'
  }
];