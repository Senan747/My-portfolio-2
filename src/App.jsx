import Profile from '../src/Components/Profile'
import Right from '../src/Components/Right'
import Main from '../src/Components/Main'
function App() {


  return (
    <div className="bg-gega-black w-full h-full flex flex-row items-start ">
      <div className="basis-1/3" ><Profile /></div>
      <div className="basis-1/2"><Main /></div>
      <div className="basis-1/6"><Right /></div>
    </div>
  )
}

export default App
