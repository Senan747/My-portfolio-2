import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaShapes} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import HambugerMenu from '../Components/HombugerMenu'
import HombugerMenu from '../Components/HombugerMenu'

function Right() {
  return (
    <div className='flex flex-col h-screen items-end relative'>
      <div className="flex flex-col justify-center items-center w-full">
        <HiOutlineMenuAlt4 className='text-6xl border-2 rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer'/>
      </div>
      <div className='relative w-full h-full flex flex-col justify-center items-center'>
        <ul className=" fixed border-2 border-gega-light rounded-3xl p-1">
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><AiOutlineHome/> </li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><CgProfile /></li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><BsFillBriefcaseFill /></li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><FaShapes /></li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><FaGripVertical /></li>
        </ul>
      </div>
      <div className='fixed'>
        <HombugerMenu />
      </div>
      
    </div>

  )
}


export default Right