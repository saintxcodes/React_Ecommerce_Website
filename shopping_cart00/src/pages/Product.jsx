import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Product = () => {

    //Category
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    //Fetching Product Using ID
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products/find/"+id)
                setProduct(res.data)
            } catch (err) {
                
            }
        }
        getProduct()
    },[id])

    //Quantity for - && + buttons on product
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if(type === "dec") {
            quantity>1 && setQuantity(quantity -1)
        } else {
            setQuantity(quantity +1)
        }
    }

    //Add To Cart
    const dispatch = useDispatch()


    const handleClick =() => {
       dispatch(addProduct({ ...product, quantity})) 
    }



  return (
    <div className=''>
      <Announcement/>
      <Navbar/>
      <div className="p-[50px] flex sm:p-[10px] sm:flex-col">
            <div className="flex-1">
                <img src={product.img} alt="" className="w-[100%] h-[90vh] object-cover sm:h-[50vh] md:w-[80%] md:h-[50vh]" />
            </div>

            <div className="flex-1 px-[50px] sm:px-[10px]">
                <h1 className="font-[200]">{product.title}</h1>
                <p className="my-[20px]">{product.desc}</p>
                <p className="font-[100] text-[40px]">${product.price}</p>
                <div className="flex justify-between w-[50%] my-[30px] sm:w-[100%]">
                    <div className="flex items-center md:mr-[20px]">
                        <h1 className="text-[20px] font-[500] md:text-[19px]">Color:</h1>
                        {product.color?.map((c)=>(

                            <div className='w-[20px] h-[20px] bg-{c} rounded-[50%] bg-{c} mx-[5px] cursor-pointer' color={c} key={c}>
                                {c}
                            </div>

                        ))}
                        
                    </div>

                    <div className="flex items-center">
                        <h1 className="text-[20px] font-[500] md:text-[19px]">Size:</h1>
                        <select className="ml-[10px] p-[5px]">
                            {product.size?.map((s)=> (
                                <option value="" className='text-[20px] font-bold' size={s} key={s}>{s}</option>
                            ))}
                                                       
                        
                        </select>
                    </div>
            </div>

            <div className="">
                <div className="flex items-center justify-between w-[50%] sm:w-[100%]">
                    <button className=''>
                        <RemoveIcon onClick={() => handleQuantity("dec")}/>
                    </button>
                    <div className="flex items-center justify-between">
                        <p className="flex items-center justify-center font-[700] w-[30px] h-[30px] rounded-md border-[1px] border-solid">{quantity}</p>
                    </div>
                    <button className=''>
                        <AddRoundedIcon onClick={() => handleQuantity("inc")}/>
                    </button>

                    <button className="bg-gray border-[4px] border-solid p-2 text-black font-[600] hover:bg-orange-500 hover:text-white hover:ease-linear hover:duration-500" onClick={handleClick}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
      </div>
      
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Product
