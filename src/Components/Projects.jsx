import React from 'react'
import {FaGripVertical} from 'react-icons/fa'

function Projects() {
  return (
    <div className='mt-24'>
       <div className='flex flex-row flex-start items-center '>
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <FaGripVertical className='text-white mr-2 ml-2' /> 
          <p className='pr-2'>Projects</p> 
        </div>
      </div>
    </div>
  )
}

export default Projects