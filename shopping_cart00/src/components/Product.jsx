import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from '@emotion/styled';
import '../App.css'

const Info = styled.div`
  opacity: 0
`;

const Container = styled.div`
  &:hover ${Info} {
    opacity: 1
  }
`;


const Product = ({item}) => {
  return (
    <div className='container flex-1 m-2 min-w-[280px] h-[350px] flex items-center justify-center bg-slate-200 relative'>
      <div className="h-[200px] w-[200px] rounded-[50%] bg-white absolute"></div>
      <img src={item.img} alt="" className='h-[75%] z-[2]' />
      <div className=""></div>
      <div className="cart w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.4] z-[3] flex items-center justify-center">

        
            <div className="w-[40px] h-[40px] rounded-[50%] bg-white flex items-center justify-center m-1 hover:bg-blue-200 hover:scale-[1.1] hover:ease-linear hover:duration-300 cursor-pointer">
              <SearchOutlinedIcon/>
            </div>

            <div className="w-[40px] h-[40px] rounded-[50%] bg-white flex items-center justify-center m-1 hover:bg-blue-200 hover:scale-[1.1] hover:ease-linear hover:duration-300 cursor-pointer">
              <Link to={`/product/${item._id}`}>
                <ShoppingCartOutlinedIcon/>
              </Link>
            </div>

            <div className="w-[40px] h-[40px] rounded-[50%] bg-white flex items-center justify-center m-1 hover:bg-blue-200 hover:scale-[1.1] hover:ease-linear hover:duration-300 cursor-pointer">
                <FavoriteBorderOutlinedIcon/>
            </div>
        
      </div>
       
    </div>
  )
}

export default Product
