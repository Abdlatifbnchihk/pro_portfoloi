import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function ScroollToTopBttn() {

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    } 

  return (
    <div>
        <button onClick={() => {
            handleScrollTop()
        }} className='go-to-top-btn h-20 w-20 flex justify-center items-center z-50'>
            <FaArrowUp className='w-10 h-10 text-white bg-[#92b115ee] p-2 rounded-full fixed bottom-8 sm:right-20 cursor-pointer hover:bg-[#879e28ee] transition animate-bounce'/>
        </button>
    </div>
  )
}

export default ScroollToTopBttn