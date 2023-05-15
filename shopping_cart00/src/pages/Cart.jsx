import React, { useEffect, useState } from 'react'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import RemoveIcon from '@mui/icons-material/Remove';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const KEY = "pk_test_51Ml50MKPvChn8VwfBlr2dv8Xbw7OGj5fTQyI3NJ7oLuPOip2Zbm15juCjKse3C3LYRuOs2pOFgmK18CcwGb6fJSa002xG9YEPV"

const Cart = () => {
  //Displaying newly updated cart items
  const cart = useSelector(state => state.cart)

  //onToken
  const [stripeToken, setStripeToken] = useState(null)

  const navigate = useNavigate()


  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/checkout/payment", 
        {
          tokenId: stripeToken.id,
          amount: cart.total *100
        })
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && makeRequest()

  },[stripeToken])



  return (
    <div className=''>
      <Announcement/>
      <Navbar/>
      <div className="p-[20px] sm:p-[10px] bg-gray-100">
       
        <h1 className=" text-center text-[30px] font-semibold mb-5"></h1>
        <div className="flex items-center justify-between p-[20px] sm:gap-2">
            <p className="p-[5px] font-[400] cursor-pointer text-[20px] text-black underline">Continue Shopping</p>

            <div className="flex sm:hidden">
                {/* <h4 className="underline cursor-pointer mx-[10px]">Shopping Bag(2)</h4>
                <h4 className="underline cursor-pointer mx-[10px]">Your Wishlist(0)</h4> */}
            </div>

            <p className="p-[5px] font-[400] text-[30px] text-black pr-[100px] underline">Cart Details</p>
        </div>
          
        
        <div className="flex justify-between sm:flex-col md:flex-col">
           
          <div className="flex-3 w-[75%] sm:w-[65%]">
            {
              cart.products.map(product => (
                <div className="">
                    <div className="flex justify-between sm:flex-col md:flex-col">
                        <div className="flex-2 flex sm:flex-1">
                            <img src={product.img} alt="" className="w-[300px] sm:w-[100px]" />
                            <div className="p-[10px] flex flex-col justify-around">
                                <span className=""><b>Product:</b> {product.title} </span>
                                <span className=""><b>ID:</b> {product._id}</span>
                                <div className="w-[20px] h-[20px] rounded-[50%]"><b>Color:</b> {product.color}</div>
                                <span className=""><b>Size:</b> {product.size} </span>
                                <hr />
                            </div>
                            
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="flex items-center">
                                {/* <AddRoundedIcon/> */}
                                <span className="text-[18px] m-[5px] sm:my-[8px] sm:mx-[15px]">Quantity: ({product.quantity}) </span>
                                {/* <RemoveIcon/> */}
                            </div>
                            <div className="text-[30px] font-[200]">$ {product.price*product.quantity} 
                                <hr />
                            </div>
                            
                        </div>
                      </div>
                </div>
              ))
            }
          
            
          </div>

          <div className="flex-1 w-[25%] border-[0.5px] border-solid border-gray-400 p-[20px] rounded-[10px] h-[50vh] sm:w-[100%] md:w-[100%]">
            <h1 className="font-[500] text-[30px] sm:text-[18px]">Order Summary</h1>
            <div className="my-[30px] flex justify-between">
              <span className="">Sub Total</span>
              <span className=""> $ {cart.total} </span>
            </div>

            <div className="my-[30px] flex justify-between">
              <span className="">Estimated Shipping</span>
              <span className=""> $ 0</span>
            </div>

            <div className="my-[30px] flex justify-between">
              <span className="">Shipping Discount</span>
              <span className=""> $ 0</span>
            </div>

            <div className="my-[30px] flex justify-between">
              <span className="font-[400] text-[28px]">Total</span>
              <span className="font-[300] text-[28px]">$ {cart.total} </span>
            </div>

            {stripeToken ? (navigate('/success')):(
            <StripeCheckout 
              name='THE OUTFIT'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}>
             
            <button className="w-[100%] border-[1px] border-solid border-gray-500 p-2 rounded-[5px] bg-black text-white">CHECKOUT NOW</button>
            </StripeCheckout>
            )} 
          </div>
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
