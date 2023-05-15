import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { useLocation } from 'react-router-dom'


const ProductList = () => {
  //Category
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  
  //Filters
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("Newest")

  //Filter Method for both Size && Color
  const handleFilters = (e) => {
    const value = e.target.value
    setFilter({
      ...filter,
      [e.target.name]: value
    })
  }


  return (
    <div className=''>
      <Announcement/>
      <Navbar/>
      <h1 className="m-[20px] text-[23px]">{cat}</h1>
      <div className="flex justify-between">
        <div className="mr-[20px] sm:my-[0px] sm:mx-[20px] sm:flex sm:flex-col">
          <p className="text-[20px] font-semibold mr-[20px] sm:mr-0">Filter Products:</p> 
          <select className='p-[10px] mr-[20px] sm:my-[10px] sm:mx-0' name="color" onChange={handleFilters}>
            <option  disabled >Color</option>
            <option value="White">White</option>
            <option value="Gray">Gray</option>
            <option value="Pink">Pink</option>
          </select>

          <select className='p-[10px] mr-[20px] sm:my-[10px] sm:mx-0' name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="m-[20px]">
        <p className="text-[20px] font-semibold mr-[20px] sm:mr-0 sm:my-[10px] sm:mx-0">Sort Products:</p>

        <select className='p-[10px] mr-[20px]' onChange={(e)=> setSort(e.target.value)}>
            <option value="Newest">Newest</option>
            <option value="asc">Price (asc) </option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>

      </div>

      <Products cat={cat} filter={filter} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList
