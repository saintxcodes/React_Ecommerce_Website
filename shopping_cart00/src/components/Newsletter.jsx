import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <div className='h-[60vh] bg-slate-200 flex items-center justify-center flex-col'>
      <h1 className="text-[70px] mb-1 sm:text-[60px]">Newsletter</h1>
      <p className="text-[24px] mb-1 font-medium sm:text-center">Get timely updates from your favorite products.</p>
      <div className="w-[50%] h-[40px] bg-white flex justify-between border-[1px] border-solid  border-slate-500 ">
        <input type="text" placeholder='Your Email' className='flex-[8] border-none pl-[20px] sm:w-[80%]'/>
        <button className="flex-1 bg-teal-700 text-white">
            <SendIcon/>
        </button>
      </div>
    </div>
  )
}

export default Newsletter
