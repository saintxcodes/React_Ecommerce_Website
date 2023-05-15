import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {

    const location = useLocation()

    console.log(location)
  return (
    <div className='flex items-center justify-center flex-col h-[100vh]'>
      <h1 className='font-[600] text-blue-950 text-[30px] '>Transaction is Successfull...</h1> 
    </div>
  )
}

export default Success
