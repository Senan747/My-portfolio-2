import React from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaShapes} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'

function HombugerMenu() {
  return (
    <div className='bg-gega-dark w-96 h-screen pl-32'>
        <p className='pb-20 pt-20'>Menu</p>

        <ul>
            <li className='pb-8'>
                <a href="" className="flex flex-row group">
                    <AiOutlineHome className='text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4'/> <p className='text-gega-light group-hover:text-gega-white'>Home</p>
                </a>
            </li>
            <li className='pb-8'>
                <a href="" className="flex flex-row group">
                    <CgProfile className='text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4'/> <p className='text-gega-light group-hover:text-gega-white'>About</p>
                </a>
            </li>
            <li className='pb-8'>
                <a href="" className="flex flex-row group">
                    <BsFillBriefcaseFill className='text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4'/> <p className='text-gega-light group-hover:text-gega-white'>Education</p>
                </a>
            </li>
            <li className='pb-8'>    
                <a href="" className="flex flex-row group">
                    <FaShapes className='text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4'/> <p className='text-gega-light group-hover:text-gega-white'>Skills</p>
                </a>
            </li>
            <li className='pb-8'>
                <a href="" className="flex flex-row group">
                    <FaGripVertical className='text-2xl text-gega-light  group-hover:text-gega-green  transition duration-300 cursor-pointer mr-4'/> <p className='text-gega-light group-hover:text-gega-white'>Projects</p>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default HombugerMenu