import React from 'react'
import Home from './pages/Home'
import { useState } from 'react'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"
import Success from './pages/Success'


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/products/:category' element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/success' element={<Success/>}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
