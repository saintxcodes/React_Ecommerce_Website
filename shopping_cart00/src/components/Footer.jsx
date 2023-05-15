import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  return (
    <div className='flex sm:flex-col sm:bg-gray-100'>
      <div className="flex-1 flex flex-col p-3"> 
        <div className="font-bold text-[22px]">OUTFIT STORE</div>
          <p className="my-[20px] text-[16px] font-[400]">
              We have clothing for all events casual, stylish and corporate. Thank You for choosing us our dear Customer. Order you products ranging from accessories to clothing and your order will be delivered to you. We are available on social media follow us for much more.
          </p>
        <div className="flex">
            <div className="w-[40px] h-[40px] text-white bg-blue-900 mr-2 flex items-center justify-center rounded-[50%] cursor-pointer">
                <LinkedInIcon/>
            </div>
            <div className="w-[40px] h-[40px] text-white bg-pink-800 mr-2 flex items-center justify-center rounded-[50%] cursor-pointer">
                <InstagramIcon/>
            </div>
            <div className="w-[40px] h-[40px] text-white bg-blue-700 mr-2 flex items-center justify-center rounded-[50%] cursor-pointer">
                <TwitterIcon/>
            </div>
        </div>
      </div>
      <div className="flex-1 p-3 sm:hidden">
        <h3 className="font-bold text-[20px] mb-[20px]">Useful Links</h3>
        <ul className="flex flex-wrap">
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Home</li>
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Cart</li>
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Products</li>
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Men's Fashion</li>
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Women's Fashion</li>
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Accessories</li>
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Order Tracking</li>
            <li className="w-[50%] mb-2 cursor-pointer hover:font-[600]">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-3">
        <h3 className="font-bold text-[20px] mb-[20px]">Contact</h3>
        <div className="mb-[20px] flex items-center">
            <RoomIcon className='mr-[10px]'/>344 Inc. Avenue, Compton, CA
        </div>
        <div className="mb-[20px] flex items-center">
            <PhoneIcon className='mr-[10px]'/>+1 236 56 789 1
        </div>
        <div className="mb-[20px] flex items-center">
            <MailIcon className='mr-[10px]'/>contact@theoutfit.dev
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className='w-[50%]' />
      </div>
    </div>
  )
}

export default Footer
