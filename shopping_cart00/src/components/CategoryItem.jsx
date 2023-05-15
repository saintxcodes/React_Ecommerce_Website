import React from 'react'
import {Link } from "react-router-dom"

const CategoryItem = ({item}) => {
  return (
    <section className='flex-1 m-[3px] h-[70vh]  relative'>

      <Link to={`/products/${item.cat}`}>
        
        <img src={item.img} alt="" className='w-[100%] h-[100%] object-cover sm:h-[35vh]'/>

        <div className='w-[100%] h-[100%] flex justify-center items-center flex-col absolute top-0 left-0'>
          <h1 className='text-white mb-2 font-semibold text-[20px]'>{item.title}</h1>
          <button className='border-[1px] p-1.5 rounded bg-white font-semibold cursor-pointer'>SHOP NOW</button>
        </div>
      </Link>
    </section>
  )
}

export default CategoryItem
