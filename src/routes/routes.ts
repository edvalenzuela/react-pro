import { About, Home, Users } from "../pages";

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
    Component: Home,
    name: 'Home'
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