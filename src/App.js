import React from 'react'
import { Product, Cart, Layout } from './component/Index'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'

const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Layout />}>
          <Route index path='product' element={<Product />} />
          <Route path='cart' element={<Cart />} />
      </Route>
    ))

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

