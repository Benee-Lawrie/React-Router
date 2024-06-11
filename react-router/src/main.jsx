import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage from './pages/rootPage.jsx';
import AboutPage from './pages/about.jsx'
import ContactPage from './pages/contact.jsx';
import HomePage from './pages/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
    ]
  },
 
  
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

