import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import Users from './Components/Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'

/*
How to write nested routes in createBrowserRouter()
1. createBrowserRouter() - used to create a router object by passing a list of route objects.
*/


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userID', // ei khane : use kora hoyche karon userid er man change hoy. : er por userid ekta variable moto kaj kore.
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetails></UserDetails>
      },
    ]
  },
  
]);

/*
React <RouterProvider/>
All data router objects are passed to this component to render your app and enable the rest of the data APls.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
