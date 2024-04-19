import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GetApp from './components/getApp.jsx'
import Root from './components/root.jsx'
import Landing from './components/landing.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        errorElement: <Landing />,
        children: [
          {
            index: true,
            element: <Landing />
          },
          {
            path: '/get-app',
            element: <GetApp />
          }
        ]
      }
    ]
  }
]);


import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
