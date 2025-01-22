import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function Hello() {
  return(
    <h2>Shivi</h2>
  )
}

// So basically App is nothing just a function returning HTML elements.

// const myObj = {
//   type:'a',
//   props:{
//     href:'https://www.cricbuzz.com',
//     target:'_blank'
//   },
//   clildren:'Cricbuzz.com'
// }
// Every function of jsx file is converting to an js file by bable (Functions to Objects)
// But we can't write like this directly brcause in the objects there may be different keys.But if we know the keys we can write the object



// This object will work because it is as per react object keys
// it will not be render like other tags <App /> beacuse it is not converting to object from function. 
// its ais already an object. So we have to print it nornally 
const mytext = 'Hello'
const myObj2 = React.createElement(
  'a',
  {href:'https://www.cricbuzz.com', 
  target:'_blank'},
  'open cricket score',
    mytext
)

createRoot(document.getElementById('root')).render(

    myObj2
)
