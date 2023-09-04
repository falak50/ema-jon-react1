import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import CartProductsLoader from './loaders/CartProductsLoader.js';
import CheckOut from './components/CheckOut/CheckOut.jsx';
import SingUp from './components/SingUp/SingUp.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';

const router =  createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: CartProductsLoader
      },
      {
        path:'invertory',
        element:<Inventory></Inventory>
      },
      {
       path:'checkout',
       element:<CheckOut></CheckOut>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path: 'singup',
        element: <SingUp></SingUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <AuthProvider>

           <RouterProvider router={router}/>  
  
    </AuthProvider>
  
  </React.StrictMode>,
)
