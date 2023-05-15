import React from 'react'
import "../App.css"

const Login = () => {
  return (
    <div className='w-[100vw] h-[100vh] background1 bg-cover flex items-center justify-center'>
       <div className="w-[30%] p-[20px] bg-white sm:w-[75%]">
        <h1 className="text-[24px] font-[700]">Sign In Here</h1>
        <form action="" method="post" className='flex flex-wrap flex-col'>

            <input type="text" className='flex-1 min-w-[40%] mt-[10px]  p-[10px]' placeholder='username' />

            <input type="text" className='flex-1 min-w-[40%] mt-[10px]  p-[10px]' placeholder='password' />
           
            <button type='submit' className="bg-gray p-1 border-[1px] w-[40%] bg-green-950 border-solid text-white my-[20px] mb-[10px] sm:w-[100%] sm:bg-green-950">LOGIN</button>

            <a className='text-black my-[5px] text-[15px] underline cursor-pointer' href="" placeholder=''>Do not remember password</a>
            <a className='text-black my-[5px] text-[15px] underline cursor-pointer' href="" placeholder=''>Create a new acount</a>
        </form>
      </div>
    </div>
  )
}

export default Login
