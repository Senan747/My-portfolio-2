import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsArrowDown} from 'react-icons/bs'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

function Introduce() {
  return (
    <BrowserRouter>
    <div className='pt-10 h-screen pl-3' id="introduce">
      <div className='flex flex-row flex-start items-center '>
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <AiOutlineHome className='text-white mr-2 ml-2' /> 
          <p className='pr-2'>Introduce</p> 
        </div>
      </div>
      <div className='h-96 flex flex-col  justify-around h-full'>
        
        <div className='w-full flex flex-col mb-10 text-gega-light'>
          <p className='text-7xl pb-8 max-md:text-5xl'>
            I'm <p className='text-gega-green'>Senan Memmedov,</p>
            Front-end Developer.
          </p>
          <p className='text-gega-light'>
            I love creating web-sites. I have different types of projects. Everyday I try to develop my skills. I hope you'll enjoy my portfolio
          </p>
        </div>
        
        <div className="flex justify-end pb-10 pr-5">
          <div className="relative inline-block">
            <Link to="#projects" className="inline-block text-center">
              <img
                src="../src/assets/round-text.png"
                alt=""
                className="block animate-[spin_4s_linear_infinite]"
              />
              <BsArrowDown className="text-gega-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Introduce