import React, { useState, useEffect, useRef } from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaShapes} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'
import {HiOutlineMenuAlt4} from 'react-icons/hi'


function Right() {
  const [showMenu, setShowMenu] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setShowMenu(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler)
  })

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className='flex flex-col h-screen items-end relative'>
      <div className="flex flex-col justify-center items-center w-full">
        <HiOutlineMenuAlt4 className='text-6xl border-2 rounded-full border-gega-light text-gega-white  hover:border-gega-green hover:text-gega-green  transition duration-300 m-2 p-4 cursor-pointer mt-10'
                          onClick={handleMenuToggle}
        />
      </div>
      <div className='relative w-full h-full flex flex-col justify-center items-center' >
        <ul className=" fixed border-2 border-gega-light rounded-3xl p-1">
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><AiOutlineHome/> </li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><CgProfile /></li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><BsFillBriefcaseFill /></li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><FaShapes /></li>
          <li className='text-2xl text-gega-light  hover:border-gega-green hover:text-gega-green  transition duration-300 p-2 mb-3 cursor-pointer'><FaGripVertical /></li>
        </ul>
      </div>
      <div className='fixed'>
        {showMenu && 
          <div className='bg-gega-dark w-96 h-screen pl-32 transition duration-1000' ref={menuRef}>
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
      }
      </div>
      
    </div>

  )
}


export default Right