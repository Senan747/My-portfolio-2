import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaShapes} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

function Right() {
  return (
    <div className='flex flex-col h-screen items-end'>
      <div className="">
        <HiOutlineMenuAlt4 className='text-4xl border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'/>
      </div>
      <ul className="flex flex-col fixed">
        <li className='text-2xl border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'><AiOutlineHome/> </li>
        <li className='text-2xl border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'><CgProfile /></li>
        <li className='text-2xl border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'><BsFillBriefcaseFill /></li>
        <li className='text-2xl border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'><FaShapes /></li>
        <li className='text-2xl border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'><FaGripVertical /></li>
      </ul>
    </div>
  )
}


export default Right