import React from 'react'
import {FaShapes} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaVuejs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'


function Skills() {
  return (
    <div className='mt-60'>
      <div className='flex flex-row flex-start items-center '>
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <FaShapes className='text-white mr-2 ml-2' /> 
          <p className='pr-2'>My skills</p> 
        </div>
      </div>
      <div>
        <ul className='flex flex-wrap mt-20 mb-20 items-center'>
          <li className='border-1 border-gega-light p-6 ml-10 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300'>
            <AiFillHtml5 className='text-7xl text-gega-white group-hover:text-gega-green transition duration-300'/>
            <p className='mt-2 text-lg'>HTML</p>
          </li>
          <li className='border-1 border-gega-light p-6 ml-10 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300'>
            <FaCss3Alt className='text-7xl text-gega-white group-hover:text-gega-green transition duration-300'/>
            <p className='mt-2 text-lg'>CSS</p>
          </li>
          <li className='border-1 border-gega-light p-6 ml-10 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300'>
            <SiJavascript className='text-7xl text-gega-white group-hover:text-gega-green transition duration-300'/>
            <p className='mt-2 text-lg'>JS</p>
          </li>
          <li className='border-1 border-gega-light p-6 ml-10 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300'>
            <FaVuejs className='text-7xl text-gega-white group-hover:text-gega-green transition duration-300'/>
            <p className='mt-2 text-lg'>VueJS</p>
          </li>
          <li className='border-1 border-gega-light p-6 ml-10 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300'>
            <FaReact className='text-7xl text-gega-white group-hover:text-gega-green transition duration-300'/>
            <p className='mt-2 text-lg'>React</p>
          </li>
          <li className='border-1 border-gega-light p-6 ml-10 rounded-30 flex items-center flex-col mb-8 group hover:border-gega-green transition duration-300'>
            <SiTailwindcss className='text-7xl text-gega-white group-hover:text-gega-green transition duration-300'/>
            <p className='mt-2 text-lg'>TailwindCSS</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills