import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'

function Profile() {
  return (
    <div className='h-screen max-xl:h-auto flex justify-center pt-10'>
      <div className='max-w-sm max-xl:max-w-lg h-auto border-1 border-gray-500 rounded-3xl text-gega-white p-8 fixed max-xl:relative' >
          <div className="flex flex-row justify-between items-center mb-8">
              <p className='text-4xl font-bold'>Senan</p>
              <div>
                <p className='text-right'>Front-end</p>
                <p className='text-xl'>Developer</p>
              </div>
              
          </div>
          <div className='mb-4'>
              <img src="../src/assets/senan1.jpeg" alt="" className='w-full grayscale rounded-3xl' />
          </div>
          <div className="flex justify-center flex-row w-full">
            <a href="https://www.linkedin.com/in/senan-memmedov/" className='rounded-full border-2 border-spacing-2 border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'>
              <AiFillLinkedin  className='text-4xl p-2' />
            </a>
            <a href="https://www.instagram.com/senanthesad/?igshid=ZDdkNTZiNTM%3D" className='rounded-full border-2 border-spacing-2 border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'>
              <AiFillInstagram className='text-4xl p-2' />
            </a> 
            <a href="https://github.com/Senan747" className='rounded-full border-2 border-spacing-2 border-gega-light text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'>
              <AiFillGithub  className='text-4xl p-2' />
            </a> 
            <a href="tel:+994507832995" className='rounded-full border-2 border-spacing-2 border-gega-light text-gega-light hover:border-gega-green hover:text-gega-green  transition duration-300 m-2'>
              <IoMdCall  className='text-4xl p-2' />
            </a> 
          </div>

          <a href="mailto: 1senanmemmedov@gmail.com" className='group flex justify-center m-8'>
            <button className='flex flex-row justify-center text-black items-center border-2 border-gega-green bg-gega-green hover:bg-transparent p-2 w-full rounded-2xl  transition duration-300 '>
              <p className='text-black pr-3 group-hover:text-gega-green  transition duration-300'>HIRE ME!</p>  <AiOutlineMail className="group-hover:text-gega-green  transition duration-300 " />
            </button>
          </a>
      </div>
    </div>
  )
}

export default Profile