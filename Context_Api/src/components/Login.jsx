import React,{useState , useContext} from "react"
import UserContext from "../context/UserContext"

const Login = ()=>{
   const [userName , setUsername] = useState('')
   const [password , setPassword] = useState('')
   const {setUser}= useContext(UserContext);
    const handleSubmit= (e)=>{
        e.preventDefault()
        setUser({userName,password})
        setUsername('')
        setPassword('')
        
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
    )
}

export default Login

