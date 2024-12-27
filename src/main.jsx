import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Contact } from './component/Contact.jsx'
import { Feature } from './component/Feature.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './component/Login.jsx'
import { Sign } from './component/Sign.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/feature',
    element: <Feature />
  },
  {
    path: '/signup',
    element: <Sign />
  },
  {
    path: '/login',
    element: <Login />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router} >

<App />

</RouterProvider>
  

  </StrictMode>,
)
