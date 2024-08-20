import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './Utils/style.css';


const _routes = createBrowserRouter(
[
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'login',
      element: <Login />,
    }
]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={_routes} />
  </StrictMode>,
)
