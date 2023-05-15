import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../pages/data"
import styled from '@emotion/styled';


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:  translateX(${(props) => props.slideIndex * -100}vw);
`

const Slider = () => {

    const[slideIndex, setslideIndex] = useState(0)
    const handleClick = (direction) => {

        if(direction==="left") {
            setslideIndex(slideIndex > 0? slideIndex -1 : 2)
        } else {
            setslideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

   

  return (
    <section className={`w-[100%] h-[100vh] flex items-center justify-between bg-blue-200 relative overflow-hidden sm:hidden`}>
        <div className="w-[50px] h-[50px] bg-neutral-500 p-2 opacity-[0.7] rounded-full cursor-pointer ml-[15px] flex items-center justify-between inset-y-[50%] left-0 absolute z-10" direction="left" onClick={() => handleClick("left")}>

            <ArrowLeftOutlinedIcon />
            
        </div>

        <Wrapper slideIndex={slideIndex}>

            { sliderItems.map((item, index) => (

            <div className="h-[100vh] w-[100vw] items-center flex" bg={ item.bg } key={item.id}>
                <div className="flex-1 h-[100%]">
                    <img src={ item.img } alt="" className="h-[80%]" />
                </div>

                <div className="flex-1 ">
                    <h1 className="text-[40px]">{ item.title }</h1>
                    <p className="my-[50px] text-[20px] mx-0 font-semibold">{ item.desc }.</p>
                    <button className="p-[10px] bg-transparent border-[2px] text-gray-700 rounded-[10px]">SHOW NOW</button>
                </div>

            </div>

            ))}
            
        </Wrapper>


        <div className="w-[50px] h-[50px] bg-neutral-500 opacity-[0.5] rounded-full p-2 mr-[15px] cursor-pointer flex items-center justify-between inset-y-[50%] right-0 absolute z-10" direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </div>
      
    </section>
  )
}

export default Slider
