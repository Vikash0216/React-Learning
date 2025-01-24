import './index.css'
import { useState } from 'react'

function App() {
const [color,setcolor] = useState('#ff521')

  return (
<div className=" h-screen flex flex-col justify-center items-center" style={{backgroundColor:color}}>
  <h1 className="text-black text-8xl mb-6">Background Changer</h1>
  <div className="flex space-x-4 fixed bottom-4">
    <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" onClick={()=>setcolor('blue')}>Blue</button>
    <button className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600" onClick={()=> setcolor('green')}>Green</button>
    <button className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600" onClick={()=> setcolor('purple')}>Purple</button>
    <button className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600" onClick={()=>setcolor('olive')}>Olive</button>
    <button className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600" onClick={()=>setcolor('pink')}>Pink</button>
    <button className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600" onClick={()=>setcolor('red')}>Red</button>
  </div>
</div>


  )
}

export default App
