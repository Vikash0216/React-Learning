import './index.css'
import { useState,useEffect,useCallback,useRef} from 'react'
import React from 'react'

// useRef hook is use to take reference of any element
        //Primary use: Accessing DOM elements or persisting mutable values across renders.
        //Does not cause re-renders: Changing ref.current does not trigger a re-render.
        //Common scenarios: Managing focus, scroll positions, timers, and storing previous state or values.
        // const ref = useRef(initialValue);
        // console.log(ref.current); // Access the current value



// The useRef hook in React is a versatile tool that allows you to manage mutable references 
// and interact directly with DOM elements or store values that persist across renders without causing re-renders.
        // When to use:
            //Fetching data, subscribing to services, managing timers, or interacting with the DOM.
        // Dependency array:
            // []: Run once (on mount).
            // [dep1, dep2]: Run when specified dependencies change.
            // Omitted: Run after every render.


// The useCallback hook in React is used to memoize callback functions.
//  This helps optimize performance by preventing the re-creation of functions on every render, 
// especially when the function is passed as a prop to child components or used in dependencies of other hooks like useEffect.
        //When to use:
            //Passing functions as props to child components (especially with React.memo).
            //Avoiding expensive computations.
            //Optimizing performance in dependency-heavy hooks like useEffect.




const PasswordGenerator = () => {
   const[length , setLength]= useState(6)
   const[withChar,setwithChar]= useState(false)
   const [withNum, setwithNum] = useState(false)
   const[password,setPassword] = useState()

   const passwordFunction = useCallback(()=>{
       
       let pass =""
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
       if(withNum) str+='1234567890'
       if(withChar) str+='~!@#$%^&*():"<>?'
       for(let i=1;i<=length;i++){
           let charIndex = Math.floor(Math.random()*str.length + 1)
           pass += str.charAt(charIndex)
        }
        setPassword(pass)
    },[length,withChar,withNum,setPassword])
    
const copyPasswordToClipBoard = useCallback(()=>{
    copyPassword.current?.select()
    // copyPassword.current?.setSelectionRange(0,10) 
    // you can set the range of the selection
    window.navigator.clipboard.writeText(password)
},[password])

   useEffect(()=>{ passwordFunction()
   },[length,withChar,withNum])

   const copyPassword = useRef(null)


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
    <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Password Generator</h1>
    </div>
    <div className="mb-4 flex items-center gap-4">
        <input
            type="text"
            readOnly
            placeholder="password"
            value={password}
            className="border border-gray-600 rounded-md p-2 w-64 text-gray-200 bg-gray-700 shadow-sm"
            ref={copyPassword}
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={copyPasswordToClipBoard}>
            Copy
        </button>
    </div>
    <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
            <input type="range" id="len" 
            min={4}
            max={50}
            value={length} className="w-64 cursor-pointer" 
            onChange={(e)=>setLength(e.target.value)}
            />
            <label htmlFor="len" className="text-gray-200">
                Length {length}
            </label>
        </div>
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id="num"
                className="w-5 h-5 accent-green-500"
                onChange={()=>setwithNum((prev)=>!prev)}
            />
            <label htmlFor="num" className="text-gray-200">
                Include number
            </label>
        </div>
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id="char"
                className="w-5 h-5 accent-green-500"
                onChange={()=> setwithChar((prev)=>!prev)}
            />
            <label htmlFor="char" className="text-gray-200">
                Include Special Char
            </label>
        </div>
    </div>
</div>

  )
}

export default PasswordGenerator