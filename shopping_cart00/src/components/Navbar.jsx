import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  

  return (
      <div className="h-[60px] py-[20px] px-[10px] flex justify-between sm:h-[50px] sm:py-[10px] dark:bg-slate-100 .placeholder-gray-400::placeholder">
      <section className="flex-1 text-[20px] flex items-center font-bold cursor-pointer">
        <Link to="/">
          <div className="sm:hidden lg:hidden">OFS</div>
        </Link>
        <div className="border-[1px] border-indigo-500/50 pl-3 ml-[30px] flex items-center font-normal w-[220px] sm:w-[85px] md:w-[180px]">
          <Input className="border-none .placeholder-gray-100::placeholder" placeholder='Search Something'/>
          <SearchIcon className=""/>
        </div>
      </section>

      <section className="flex-1 xl:flex-2">
        <div className="">
          <h1 className="font-bold text-[28px] text-center sm:text-[15px] xl:text-start">OUTF!T STORE</h1>
        </div>
      </section>

      <section className="flex-2 flex justify-end gap-[25px] sm:justify-center sm:gap-1">
        <div className="text-[16px] dark:text-slate-400 cursor-pointer sm:text-[10px] md:hidden xl:hidden">Register</div>
        <div className="text-[16px] dark:text-slate-400 cursor-pointer sm:text-[10px] md:hidden xl:hidden">Sign In</div>
        <Link to="/cart">
          <div>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon/>
          </Badge>
          </div>
        </Link>
      </section>
    </div>
  )
}

export default Navbar
