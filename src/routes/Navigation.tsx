import { Suspense } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Root';

import { routes } from './routes';

const children = routes.map(({path, Component}) => (
  { path, element: <Component/> }
))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children
  },
  {
    path: "/*",
    element: <Navigate to={routes[0].to} replace />
  }
]);

export const Navigation = () => {
  return (
    <Suspense fallback={<p>LOADING...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
