import './App.css'
import config from './configVar/config';

function App() {
  // console.log(process.env._REACT_APP_APPWRITE_URL)
  // We cannot do this. Every enviorment like vite or next can be accessed diffrently 
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(config.appwriteDatabaseId);
  

  return (
    
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
