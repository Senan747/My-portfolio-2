import React from 'react'
import {CgProfile} from 'react-icons/cg'

function About() {
  return (
    <div>
      <div className='flex flex-row flex-start items-center mb-10 mt-10'>
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <CgProfile className='text-white mr-2 ml-2' /> 
          <p className="pr-2">About</p> 
        </div>
      </div>
      
      <div className='flex flex-col flex-start items-center '>
        
        <div>
          <p className='text-5xl pb-8'>
            It all started with <p className='text-gega-green'>a little bit of searching</p> 
          </p>

          <p className='text-lg text-gega-light'>
            I became interested in IT branches, and after some research, I decided to pursue Front-end development. It was around November 2022.
            Front-end is a field that I have a deep passion for. Working in this field brings together several qualities that I value. Front-end allows me to create visually appealing and impactful interfaces that users can interact with.
            My love for Front-end has grown because it provides me with the opportunity to shape and design my creative ideas. Improving user experiences and creating simple, intuitive interfaces are among my primary goals. I am always eager to engage with people and help solve their problems.
            In the world of Front-end, continuous learning is like a lifelong journey for me. Adapting to changing technologies and emerging trends is a natural requirement in this field. This means I am constantly excited to stay up-to-date and further develop myself.
            Lastly, one of the most important reasons I love Front-end is that it allows me to share my creative ideas with others. Working in this field enables me to express myself and continue sharing my visual concepts with other people.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About