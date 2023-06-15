import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'

function Introduce() {
  return (
    <div className='pt-10'>
      <div className='flex flex-row flex-start items-center '>
        <div className="flex flex-row items-center border-2 border-gega-light p-1 rounded-xl space-x-1">
          <AiOutlineHome className='text-white mr-2' /> 
          <p>Introduce</p> 
        </div>
      </div>
      <div className='h-96 flex flex-col  justify-center'>
        
        <div className='w-full flex mb-10 text-gega-light'>
          <p className='text-7xl'>
            I'm Senan Memmedov,
            Front-end Developer.
          </p>
        </div>
        <p>I love creating web-sites.</p>
      </div>
      
    </div>
  )
}

export default Introduce