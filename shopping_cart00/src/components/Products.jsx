import React, { useEffect, useState } from 'react'
import { popularProducts } from '../pages/data'
import Product from './Product'
import axios from 'axios'

const Products = ({cat,filter,sort}) => {
  const [products, setproducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  //Using "axios" to get products from API.
  useEffect(()=> {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat? `http://localhost:5000/api/products?category=${cat}`: `http://localhost:5000/api/products`)
        
        setproducts(res.data)
      } catch (err) {
        
      }
    }
    getProducts()
  },[cat])

  // defining filteredProducts
  useEffect(()=> {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filter).every(([key, value]) => 
        item[key].includes(value)
      ))
    )
  },[products, cat, filter])

  //Sorting with Price
  useEffect(() => {
    if((sort === "Newest")) {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if((sort === "asc")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    }else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  },[sort])


  return (
    <div className='p-[20px] flex flex-wrap'>
      {cat ?  filteredProducts.map(item => (
        <Product item={item} key={item.id}/>
        )) : products.slice(0,4).map(item => (
          <Product item={item} key={item.id}/>
          ))
      }
    </div>
  )
}

export default Products
