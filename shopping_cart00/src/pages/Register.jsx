import React from 'react'
import "../App.css"

const Register = () => {
  return (
    <div className='w-[100vw] h-[100vh] background bg-cover flex items-center justify-center'>
       <div className="w-[40%] p-[20px] bg-white sm:w-[75%]">
        <h1 className="text-[24px] font-[300] sm:text-[15px]">CREATE AN ACCOUNT</h1>
        <form action="" method="post" className='flex flex-wrap'>
            <input type="text" className='flex-1 min-w-[40%] mt-[20px] mr-[10px] p-[10px]' placeholder='first name' />
            <input type="text" className='flex-1 min-w-[40%] mt-[20px] mr-[10px] p-[10px]' placeholder='last name' />
            <input type="text" className='flex-1 min-w-[40%] mt-[20px] mr-[10px] p-[10px]' placeholder='username' />
            <input type="text" className='flex-1 min-w-[40%] mt-[20px] mr-[10px] p-[10px]' placeholder='email' />
            <input type="text" className='flex-1 min-w-[40%] mt-[20px] mr-[10px] p-[10px]' placeholder='password' />
            <input type="text" className='flex-1 min-w-[40%] mt-[20px] mr-[10px] p-[10px]' placeholder='confirm password' />
            <div className="text-[15px] my-[20px] sm:text-[11px]">
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </div>
            <button type='submit' className="bg-gray p-1 border-[1px] w-[40%] bg-green-950 border-solid text-white sm:w-[100%] sm:bg-green-950">CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
