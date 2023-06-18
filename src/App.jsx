import Profile from '../src/Components/Profile'
import Right from '../src/Components/Right'
import Main from '../src/Components/Main'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])

  return (
    <div className='bg-gega-black min-h-screen '>
      {
        loading ? 
        (
          <div className='flex items-center justify-center min-h-screen'> 
            <ClimbingBoxLoader
              loading={loading}
              color={'#28E98C'}
              size={30}
            />
          </div>
          
        )
        :
        (
          <div className="bg-gega-black w-full h-full flex flex-row items-start animate-[pulse_1s_ease-in-out]">
            <div className="basis-1/3" ><Profile /></div>
            <div className="basis-1/2"><Main /></div>
            <div className="basis-1/6"><Right /></div>
          </div>
        )

      }
      
    </div>
    
  )
}

export default App
