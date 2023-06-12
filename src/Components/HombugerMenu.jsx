import React from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaShapes} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'

function HombugerMenu() {
  return (
    <div className='bg-gega-dark max-w-6xl'>
        <p>Menu</p>

        <ul>
            <li>
                <a href="">
                    <AiOutlineHome  className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 cursor-pointer'/> <p>Home</p>
                </a>
            </li>
            <li>
                <a href="">
                    <CgProfile className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 cursor-pointer'/> <p>About</p>
                </a>
            </li>
            <li>
                <a href="">
                    <BsFillBriefcaseFill className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 cursor-pointer'/> <p>Education</p>
                </a>
            </li>
            <li>    
                <a href="">
                    <FaShapes className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 cursor-pointer'/> <p>Skills</p>
                </a>
            </li>
            <li>
                <a href="">
                    <FaGripVertical className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 cursor-pointer'/> <p>Projects</p>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default HombugerMenu