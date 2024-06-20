import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Root';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "lazy1",
        index: true,
        element: <LazyPage1 />
      },
      {
        path: "lazy2",
        element: <LazyPage2 />
      },
      {
        path: "lazy3",
        element: <LazyPage3 />,
      }
    ]
  },
  {
    path: "/*",
    element: <Navigate to="/lazy1" replace={true} />
  }
]);

export const Navigation = () => {
  return (
    <RouterProvider router={router} />
  )
}
